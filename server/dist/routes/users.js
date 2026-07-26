"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET /api/users/me - Get the currently authenticated user's profile
router.get('/me', auth_1.authenticateToken, async (req, res) => {
    const userId = req.user?.id;
    if (!userId)
        return res.status(401).json({ message: 'Unauthenticated' });
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                phoneNumber: true,
                location: true,
                profilePicture: true,
                isVerified: true,
                isAdmin: true,
                createdAt: true,
            }
        });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting user profile' });
    }
});
// GET /api/users/:id - Get a public user profile by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                location: true,
                profilePicture: true,
                isVerified: true,
                createdAt: true,
                // Include related profiles if they exist
                sellerProfile: true,
                providerProfile: true,
                driverProfile: true,
                // Include reviews and counts
                reviewsReceived: {
                    select: {
                        rating: true,
                        comment: true,
                        reviewer: { select: { id: true, name: true, profilePicture: true } }
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 10,
                },
                _count: {
                    select: {
                        reviewsReceived: true,
                        products: true,
                        services: true,
                    }
                }
            },
        });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting user' });
    }
});
// PUT /api/users/me - Update the authenticated user's profile
router.put('/me', auth_1.authenticateToken, async (req, res) => {
    const userId = req.user?.id;
    if (!userId)
        return res.status(401).json({ message: 'Unauthenticated' });
    const { name, phoneNumber, location, profilePicture } = req.body;
    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                name,
                phoneNumber,
                location,
                profilePicture,
            },
            select: {
                id: true,
                email: true,
                name: true,
                phoneNumber: true,
                location: true,
                profilePicture: true,
            }
        });
        res.json(updatedUser);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error updating profile' });
    }
});
exports.default = router;
