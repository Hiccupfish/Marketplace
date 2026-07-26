"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET /api/delivery/as-buyer - Get all deliveries for the current user as a buyer
router.get('/as-buyer', auth_1.authenticateToken, async (req, res) => {
    const authReq = req;
    try {
        const deliveries = await prisma.delivery.findMany({
            where: { offer: { buyerEmail: authReq.user.email } },
            include: { offer: { include: { listing: true } } },
            orderBy: { createdAt: 'desc' },
        });
        return res.json(deliveries);
    }
    catch (err) {
        console.error('Error fetching deliveries as buyer:', err);
        return res.status(500).json({ message: 'Failed to fetch deliveries.' });
    }
});
// GET /api/delivery/as-seller - Get all deliveries for the current user as a seller
router.get('/as-seller', auth_1.authenticateToken, async (req, res) => {
    const authReq = req;
    try {
        const deliveries = await prisma.delivery.findMany({
            where: { offer: { listing: { sellerId: authReq.user.id } } },
            include: { offer: { include: { listing: true } } },
            orderBy: { createdAt: 'desc' },
        });
        return res.json(deliveries);
    }
    catch (err) {
        console.error('Error fetching deliveries as seller:', err);
        return res.status(500).json({ message: 'Failed to fetch deliveries.' });
    }
});
// GET /api/delivery/offer/:offerId - Get delivery details for a specific offer
router.get('/offer/:offerId', async (req, res) => {
    try {
        const offerId = Number(req.params.offerId);
        const delivery = await prisma.delivery.findUnique({
            where: { offerId },
            include: { offer: true },
        });
        if (!delivery) {
            return res.status(404).json({ message: 'Delivery details not found for this offer.' });
        }
        return res.json(delivery);
    }
    catch (err) {
        console.error('Error fetching delivery details:', err);
        return res.status(500).json({ message: 'Failed to fetch delivery details.' });
    }
});
// PATCH /api/delivery/:id/status - Update the status of a delivery
router.patch('/:id/status', auth_1.authenticateToken, async (req, res) => {
    try {
        const deliveryId = Number(req.params.id);
        const { status } = req.body; // e.g., 'IN_TRANSIT', 'DELIVERED'
        if (!status) {
            return res.status(400).json({ message: 'Status is required.' });
        }
        // TODO: Add authorization to ensure only seller can update status
        const updatedDelivery = await prisma.delivery.update({
            where: { id: deliveryId },
            data: { status },
        });
        console.log(`[DELIVERY UPDATED]: Delivery #${deliveryId} set to ${status}`);
        return res.json(updatedDelivery);
    }
    catch (err) {
        console.error('Error updating delivery status:', err);
        return res.status(500).json({ message: 'Failed to update delivery status.' });
    }
});
exports.default = router;
