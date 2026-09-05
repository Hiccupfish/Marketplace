"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// --- Helpers ---
const parseJsonField = (value) => {
    if (!value)
        return [];
    try {
        return JSON.parse(value);
    }
    catch {
        return [];
    }
};
const serializeJsonField = (arr) => {
    if (!arr || arr.length === 0)
        return undefined;
    return JSON.stringify(arr);
};
const buildUserSummary = (user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    profilePicture: user.profilePicture,
    location: user.location,
    isVerified: user.isVerified,
    accountType: user.accountType,
    rating: user.rating,
    reviewCount: user.reviewCount,
    businessProfile: user.businessProfile,
    providerProfile: user.providerProfile,
});
const buildCategorySummary = (category) => ({
    id: category.id,
    name: category.name,
    icon: category.icon,
});
// --- Matching Logic ---
const findMatchingProviders = async (requestId, categoryId, location) => {
    const matches = [];
    const users = await prisma.user.findMany({
        where: {
            OR: [
                { businessProfile: { category: { equals: categoryId } } },
                { providerProfile: { isNot: null } },
            ],
        },
        include: {
            businessProfile: true,
            providerProfile: true,
        },
    });
    for (const user of users) {
        const hasBusinessMatch = user.businessProfile && user.businessProfile.category === (await prisma.category.findUnique({ where: { id: categoryId } }))?.name;
        const hasProviderMatch = user.providerProfile !== null;
        if (hasBusinessMatch || hasProviderMatch) {
            await prisma.notification.create({
                data: {
                    userId: user.id,
                    requestId,
                    type: 'NEW_REQUEST_MATCH',
                    title: 'New Request Matches Your Services',
                    message: `A new ${categoryId} request has been posted that matches your profile. Submit a proposal to be considered.`,
                },
            });
            matches.push(user);
        }
    }
    return matches;
};
// --- Request Status Helpers ---
const advanceRequestStatus = async (requestId) => {
    const request = await prisma.request.findUnique({ where: { id: requestId }, include: { offers: true } });
    if (!request)
        return;
    let newStatus = request.status;
    if (request.proposalCount > 0 && request.status === 'OPEN') {
        newStatus = 'RECEIVING_PROPOSALS';
    }
    if (newStatus !== request.status) {
        await prisma.request.update({
            where: { id: requestId },
            data: { status: newStatus },
        });
    }
};
// ==========================
// REQUESTS
// ==========================
// GET /api/requests - Get all requests (public)
router.get('/', async (req, res) => {
    const { search, category, location, status, marketplaceType, requesterId, page = '1', limit = '20' } = req.query;
    const filters = {};
    if (search) {
        filters.OR = [
            { title: { contains: String(search), mode: 'insensitive' } },
            { description: { contains: String(search), mode: 'insensitive' } },
        ];
    }
    if (category)
        filters.categoryId = String(category);
    if (location)
        filters.location = { contains: String(location), mode: 'insensitive' };
    if (status)
        filters.status = String(status);
    if (marketplaceType)
        filters.marketplaceType = String(marketplaceType);
    if (requesterId)
        filters.requesterId = String(requesterId);
    const skip = (Number(page) - 1) * Number(limit);
    try {
        const [requests, total] = await Promise.all([
            prisma.request.findMany({
                where: filters,
                include: {
                    requester: { select: { id: true, name: true, profilePicture: true, isVerified: true } },
                    category: true,
                    offers: {
                        where: { status: { not: 'WITHDRAWN' } },
                        include: { provider: { select: { id: true, name: true, profilePicture: true, isVerified: true, businessProfile: { select: { businessName: true, logoUrl: true, completedTransactions: true } } } } },
                        orderBy: { createdAt: 'desc' },
                    },
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: Number(limit),
            }),
            prisma.request.count({ where: filters }),
        ]);
        res.json({ requests, total, page: Number(page), limit: Number(limit), totalPages: Math.ceil(total / Number(limit)) });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting requests' });
    }
});
// GET /api/requests/:id - Get a single request
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const request = await prisma.request.findUnique({
            where: { id },
            include: {
                requester: { select: { id: true, name: true, profilePicture: true, isVerified: true, email: true, phoneNumber: true, location: true } },
                category: true,
                offers: {
                    include: {
                        provider: {
                            select: {
                                id: true,
                                name: true,
                                profilePicture: true,
                                isVerified: true,
                                businessProfile: { select: { businessName: true, logoUrl: true, description: true, completedTransactions: true } },
                                providerProfile: { select: { bio: true, portfolio: true } },
                            },
                        },
                    },
                    orderBy: { createdAt: 'desc' },
                },
                negotiations: {
                    include: { sender: { select: { id: true, name: true, profilePicture: true } } },
                    orderBy: { createdAt: 'asc' },
                },
            },
        });
        if (!request)
            return res.status(404).json({ message: 'Request not found' });
        const parsed = {
            ...request,
            images: parseJsonField(request.images || undefined),
            offers: request.offers.map((offer) => ({
                ...offer,
                portfolioImages: parseJsonField(offer.portfolioImages),
                previousWork: parseJsonField(offer.previousWork),
            })),
        };
        res.json(parsed);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting request' });
    }
});
// POST /api/requests - Create a new request (authenticated)
router.post('/', auth_1.authenticateToken, async (req, res) => {
    const requesterId = req.user?.id;
    if (!requesterId)
        return res.status(401).json({ message: 'Unauthenticated' });
    const { title, description, marketplaceType, categoryId, budget, location, deadline, preferredFulfilment, images } = req.body;
    if (!title || !description || !categoryId) {
        return res.status(400).json({ message: 'Missing required fields: title, description, categoryId' });
    }
    try {
        const request = await prisma.request.create({
            data: {
                title,
                description,
                marketplaceType: marketplaceType || 'SERVICE',
                requester: { connect: { id: requesterId } },
                category: { connect: { id: categoryId } },
                budget: budget ? parseFloat(budget) : undefined,
                location,
                deadline: deadline ? new Date(deadline) : undefined,
                preferredFulfilment,
                images: serializeJsonField(images),
            },
            include: {
                requester: { select: { id: true, name: true, profilePicture: true, isVerified: true } },
                category: true,
            },
        });
        // Automatic matching
        await findMatchingProviders(request.id, categoryId, location);
        // Update parsed image URLs
        const parsed = { ...request, images: parseJsonField(request.images || undefined) };
        res.status(201).json(parsed);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error creating request' });
    }
});
// GET /api/requests/my - Get current user's requests
router.get('/my', auth_1.authenticateToken, async (req, res) => {
    const userId = req.user?.id;
    if (!userId)
        return res.status(401).json({ message: 'Unauthenticated' });
    try {
        const requests = await prisma.request.findMany({
            where: { requesterId: userId },
            include: {
                requester: { select: { id: true, name: true, profilePicture: true, isVerified: true } },
                category: true,
                offers: {
                    where: { status: { not: 'WITHDRAWN' } },
                    include: { provider: { select: { id: true, name: true, profilePicture: true, isVerified: true } } },
                    orderBy: { createdAt: 'desc' },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        const parsed = requests.map((r) => ({
            ...r,
            images: parseJsonField(r.images),
            offers: r.offers.map((o) => ({ ...o, portfolioImages: parseJsonField(o.portfolioImages), previousWork: parseJsonField(o.previousWork) })),
        }));
        res.json(parsed);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting my requests' });
    }
});
// GET /api/requests/my/offers - Get proposals I've submitted
router.get('/my/offers', auth_1.authenticateToken, async (req, res) => {
    const userId = req.user?.id;
    if (!userId)
        return res.status(401).json({ message: 'Unauthenticated' });
    try {
        const offers = await prisma.requestOffer.findMany({
            where: { providerId: userId },
            include: {
                request: {
                    include: {
                        requester: { select: { id: true, name: true, profilePicture: true, isVerified: true } },
                        category: true,
                    },
                },
                provider: { select: { id: true, name: true, profilePicture: true, isVerified: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
        const parsed = offers.map((o) => ({
            ...o,
            portfolioImages: parseJsonField(o.portfolioImages),
            previousWork: parseJsonField(o.previousWork),
        }));
        res.json(parsed);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting my offers' });
    }
});
// PATCH /api/requests/:id/status - Update request status
router.patch('/:id/status', auth_1.authenticateToken, async (req, res) => {
    const userId = req.user?.id;
    const { id } = req.params;
    const { status } = req.body;
    if (!['RECEIVING_PROPOSALS', 'UNDER_REVIEW', 'NEGOTIATING', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'EXPIRED'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
    }
    try {
        const requestWithOffers = await prisma.request.findUnique({
            where: { id },
            include: {
                offers: { where: { status: { not: 'WITHDRAWN' } }, select: { providerId: true, status: true } },
            },
        });
        if (!requestWithOffers)
            return res.status(404).json({ message: 'Request not found' });
        if (requestWithOffers.requesterId !== userId)
            return res.status(403).json({ message: 'Forbidden: You do not own this request' });
        const updated = await prisma.request.update({
            where: { id },
            data: { status },
            include: { requester: { select: { id: true, name: true } }, category: true },
        });
        await prisma.notification.createMany({
            data: requestWithOffers.offers.filter((o) => o.status !== 'WITHDRAWN').map((offer) => ({
                userId: offer.providerId,
                requestId: requestWithOffers.id,
                type: 'STATUS_CHANGE',
                title: `Request Status Updated`,
                message: `The request "${requestWithOffers.title}" status has been changed to ${status}.`,
            })),
        });
        res.json({ ...updated, images: parseJsonField(updated.images || undefined) });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error updating request status' });
    }
});
// ==========================
// PROPOSALS / OFFERS
// ==========================
// POST /api/requests/:id/offers - Submit a proposal
router.post('/:id/offers', auth_1.authenticateToken, async (req, res) => {
    const providerId = req.user?.id;
    const { id: requestId } = req.params;
    const { price, estimatedCompletionTime, availability, proposalMessage, experience, portfolioImages, previousWork } = req.body;
    if (!providerId)
        return res.status(401).json({ message: 'Unauthenticated' });
    if (!price)
        return res.status(400).json({ message: 'Price is required' });
    try {
        const request = await prisma.request.findUnique({ where: { id: requestId } });
        if (!request)
            return res.status(404).json({ message: 'Request not found' });
        if (request.requesterId === providerId)
            return res.status(400).json({ message: 'You cannot submit a proposal for your own request' });
        if (request.status === 'CANCELLED' || request.status === 'EXPIRED' || request.status === 'COMPLETED') {
            return res.status(400).json({ message: 'This request is no longer accepting proposals' });
        }
        const existing = await prisma.requestOffer.findFirst({ where: { requestId, providerId } });
        if (existing)
            return res.status(400).json({ message: 'You have already submitted a proposal for this request' });
        const offer = await prisma.requestOffer.create({
            data: {
                request: { connect: { id: requestId } },
                provider: { connect: { id: providerId } },
                price: parseFloat(price),
                estimatedCompletionTime,
                availability,
                proposalMessage,
                experience,
                portfolioImages: serializeJsonField(portfolioImages),
                previousWork: serializeJsonField(previousWork),
            },
            include: {
                provider: { select: { id: true, name: true, profilePicture: true, isVerified: true, businessProfile: { select: { businessName: true, logoUrl: true, completedTransactions: true } } } },
            },
        });
        // Update proposal count and status
        await prisma.request.update({
            where: { id: requestId },
            data: {
                proposalCount: { increment: 1 },
                status: request.status === 'OPEN' ? 'RECEIVING_PROPOSALS' : request.status,
            },
        });
        // Notify requester
        await prisma.notification.create({
            data: {
                userId: request.requesterId,
                requestId,
                type: 'NEW_PROPOSAL',
                title: 'New Proposal Received',
                message: `${offer.provider.name} submitted a proposal for "${request.title}".`,
                relatedId: offer.id,
            },
        });
        const parsed = { ...offer, portfolioImages: parseJsonField(offer.portfolioImages || undefined), previousWork: parseJsonField(offer.previousWork || undefined) };
        res.status(201).json(parsed);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error creating proposal' });
    }
});
// PATCH /api/requests/:id/offers/:offerId - Update proposal
router.patch('/:id/offers/:offerId', auth_1.authenticateToken, async (req, res) => {
    const providerId = req.user?.id;
    const { id: requestId, offerId } = req.params;
    const { price, estimatedCompletionTime, availability, proposalMessage, experience, portfolioImages, previousWork } = req.body;
    if (!providerId)
        return res.status(401).json({ message: 'Unauthenticated' });
    try {
        const offer = await prisma.requestOffer.findUnique({ where: { id: offerId } });
        if (!offer)
            return res.status(404).json({ message: 'Proposal not found' });
        if (offer.providerId !== providerId)
            return res.status(403).json({ message: 'Forbidden: You do not own this proposal' });
        if (offer.status !== 'PENDING' && offer.status !== 'VIEWED') {
            return res.status(400).json({ message: 'Cannot update proposal in current status' });
        }
        const updated = await prisma.requestOffer.update({
            where: { id: offerId },
            data: {
                price: price ? parseFloat(price) : undefined,
                estimatedCompletionTime,
                availability,
                proposalMessage,
                experience,
                portfolioImages: portfolioImages ? serializeJsonField(portfolioImages) : undefined,
                previousWork: previousWork ? serializeJsonField(previousWork) : undefined,
            },
            include: {
                provider: { select: { id: true, name: true, profilePicture: true, isVerified: true } },
            },
        });
        const parsed = { ...updated, portfolioImages: parseJsonField(updated.portfolioImages || undefined), previousWork: parseJsonField(updated.previousWork || undefined) };
        res.json(parsed);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error updating proposal' });
    }
});
// PATCH /api/requests/:id/offers/:offerId/status - Accept/Reject proposal
router.patch('/:id/offers/:offerId/status', auth_1.authenticateToken, async (req, res) => {
    const userId = req.user?.id;
    const { id: requestId, offerId } = req.params;
    const { status } = req.body;
    if (!['ACCEPTED', 'REJECTED', 'SHORTLISTED', 'VIEWED'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status. Use ACCEPTED, REJECTED, SHORTLISTED, or VIEWED.' });
    }
    try {
        const [request, offer] = await Promise.all([
            prisma.request.findUnique({ where: { id: requestId } }),
            prisma.requestOffer.findUnique({ where: { id: offerId } }),
        ]);
        if (!request)
            return res.status(404).json({ message: 'Request not found' });
        if (!offer)
            return res.status(404).json({ message: 'Proposal not found' });
        if (request.requesterId !== userId)
            return res.status(403).json({ message: 'Forbidden: Only the requester can update proposal status' });
        const updatedOffer = await prisma.requestOffer.update({
            where: { id: offerId },
            data: {
                status,
                viewedAt: status === 'VIEWED' ? new Date() : offer.viewedAt,
            },
            include: { provider: { select: { id: true, name: true, profilePicture: true } } },
        });
        if (status === 'SHORTLISTED') {
            await prisma.requestOffer.update({ where: { id: offerId }, data: { isShortlisted: true } });
            await prisma.request.update({ where: { id: requestId }, data: { shortlistedCount: { increment: 1 } } });
        }
        if (status === 'ACCEPTED') {
            await prisma.request.update({
                where: { id: requestId },
                data: { status: 'ACCEPTED' },
            });
            await prisma.requestOffer.updateMany({
                where: { requestId, id: { not: offerId } },
                data: { status: 'REJECTED' },
            });
        }
        await prisma.notification.create({
            data: {
                userId: offer.providerId,
                requestId,
                type: 'PROPOSAL_ACCEPTED',
                title: `Proposal ${status}`,
                message: `Your proposal for "${request.title}" has been ${status.toLowerCase()}.`,
                relatedId: offerId,
            },
        });
        const parsed = { ...updatedOffer, portfolioImages: parseJsonField(updatedOffer.portfolioImages || undefined), previousWork: parseJsonField(updatedOffer.previousWork || undefined) };
        res.json(parsed);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error updating proposal status' });
    }
});
// DELETE /api/requests/:id/offers/:offerId - Withdraw proposal
router.delete('/:id/offers/:offerId', auth_1.authenticateToken, async (req, res) => {
    const providerId = req.user?.id;
    const { id: requestId, offerId } = req.params;
    if (!providerId)
        return res.status(401).json({ message: 'Unauthenticated' });
    try {
        const offer = await prisma.requestOffer.findUnique({ where: { id: offerId } });
        if (!offer)
            return res.status(404).json({ message: 'Proposal not found' });
        if (offer.providerId !== providerId)
            return res.status(403).json({ message: 'Forbidden: You do not own this proposal' });
        await prisma.requestOffer.delete({ where: { id: offerId } });
        // Update request status and proposal count
        await prisma.request.update({
            where: { id: requestId },
            data: {
                proposalCount: { decrement: 1 },
            },
        });
        return res.json({ message: 'Proposal withdrawn' });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error withdrawing proposal' });
    }
});
exports.default = router;
