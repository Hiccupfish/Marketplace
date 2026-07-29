"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET /api/services - list services with optional filters
router.get('/', async (req, res) => {
    const { search, category, serviceArea } = req.query;
    const filters = {};
    if (search) {
        filters.OR = [
            { title: { contains: String(search), mode: 'insensitive' } },
            { description: { contains: String(search), mode: 'insensitive' } },
        ];
    }
    if (category)
        filters.category = { name: String(category) };
    if (serviceArea)
        filters.serviceArea = { contains: String(serviceArea), mode: 'insensitive' };
    try {
        const services = await prisma.service.findMany({
            where: filters,
            include: { provider: { select: { id: true, name: true, profilePicture: true, location: true } }, category: true },
            orderBy: { createdAt: 'desc' },
        });
        res.json(services);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting services' });
    }
});
// GET /api/services/:id - get single service
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const service = await prisma.service.findUnique({ where: { id }, include: { provider: { select: { id: true, name: true, profilePicture: true, location: true } }, category: true } });
        if (!service)
            return res.status(404).json({ message: 'Service not found' });
        res.json(service);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting service' });
    }
});
// POST /api/services - create a new service (authenticated)
router.post('/', auth_1.authenticateToken, async (req, res) => {
    const providerId = req.user?.id;
    if (!providerId)
        return res.status(401).json({ message: 'Unauthenticated' });
    const { title, description, categoryId, serviceArea, startingPrice } = req.body;
    if (!title || !categoryId)
        return res.status(400).json({ message: 'Missing required fields: title, categoryId' });
    try {
        const service = await prisma.service.create({
            data: {
                title,
                description,
                provider: { connect: { id: providerId } },
                category: { connect: { id: categoryId } },
                serviceArea,
                availability: 'AVAILABLE',
                startingPrice: startingPrice ? parseFloat(startingPrice) : undefined,
            },
        });
        res.status(201).json(service);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error creating service' });
    }
});
exports.default = router;
