"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Get all sellers
router.get('/', async (req, res) => {
    try {
        const sellers = await prisma.seller.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                city: true,
                avatarUrl: true,
                bio: true,
                category: true,
                rating: true,
                reviewCount: true,
                verified: true,
            },
        });
        res.json(sellers);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
// Get seller by ID with their listings
router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const seller = await prisma.seller.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                city: true,
                avatarUrl: true,
                bio: true,
                category: true,
                rating: true,
                reviewCount: true,
                verified: true,
                listings: { select: { id: true, title: true, priceZar: true, category: true, city: true } },
            },
        });
        if (!seller)
            return res.status(404).json({ message: 'Seller not found' });
        res.json(seller);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
// Update seller profile (owner only)
router.put('/:id', auth_1.authenticateToken, async (req, res) => {
    const sellerId = req.user?.id;
    const id = Number(req.params.id);
    if (sellerId !== id)
        return res.status(403).json({ message: 'Forbidden' });
    try {
        const updated = await prisma.seller.update({
            where: { id },
            data: req.body,
        });
        const { password, ...safe } = updated;
        res.json(safe);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.default = router;
