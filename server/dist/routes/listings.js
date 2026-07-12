"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Get all listings with optional filters
router.get('/', async (req, res) => {
    const { search, category, city, seller } = req.query;
    const filters = {};
    if (search) {
        filters.OR = [
            { title: { contains: String(search), mode: 'insensitive' } },
            { description: { contains: String(search), mode: 'insensitive' } },
        ];
    }
    if (category)
        filters.category = String(category);
    if (city)
        filters.city = String(city);
    if (seller)
        filters.sellerId = Number(seller);
    if (seller)
        filters.sellerId = Number(seller);
    try {
        const listings = await prisma.listing.findMany({
            where: filters,
            include: { seller: { select: { id: true, name: true, avatarUrl: true, city: true } } },
            orderBy: { createdAt: 'desc' },
        });
        res.json(listings);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
// Get single listing
router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const listing = await prisma.listing.findUnique({
            where: { id },
            include: { seller: { select: { id: true, name: true, avatarUrl: true, city: true, rating: true } } },
        });
        if (!listing)
            return res.status(404).json({ message: 'Listing not found' });
        res.json(listing);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
// Create new listing (authenticated)
router.post('/', auth_1.authenticateToken, async (req, res) => {
    const sellerId = req.user?.id;
    if (!sellerId)
        return res.status(401).json({ message: 'Unauthenticated' });
    const { title, description, priceZar, category, city } = req.body;
    if (!title || !priceZar || !category || !city) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const listing = await prisma.listing.create({
            data: { title, description, priceZar, category, city, sellerId },
        });
        res.status(201).json(listing);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
// Update listing (owner only)
router.put('/:id', auth_1.authenticateToken, async (req, res) => {
    const sellerId = req.user?.id;
    const id = Number(req.params.id);
    try {
        const listing = await prisma.listing.findUnique({ where: { id } });
        if (!listing)
            return res.status(404).json({ message: 'Listing not found' });
        if (listing.sellerId !== sellerId)
            return res.status(403).json({ message: 'Forbidden' });
        const updated = await prisma.listing.update({
            where: { id },
            data: req.body,
        });
        res.json(updated);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
// Delete listing (owner only)
router.delete('/:id', auth_1.authenticateToken, async (req, res) => {
    const sellerId = req.user?.id;
    const id = Number(req.params.id);
    try {
        const listing = await prisma.listing.findUnique({ where: { id } });
        if (!listing)
            return res.status(404).json({ message: 'Listing not found' });
        if (listing.sellerId !== sellerId)
            return res.status(403).json({ message: 'Forbidden' });
        await prisma.listing.delete({ where: { id } });
        res.status(204).send();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.default = router;
