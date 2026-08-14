import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// GET /api/services/my-services - Get authenticated user's services
router.get('/my-services', authenticateToken, async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  if (!userId) return res.status(401).json({ message: 'Unauthenticated' });

  try {
    const services = await prisma.service.findMany({
      where: { providerId: userId },
      include: { provider: { select: { id: true, name: true, profilePicture: true, location: true } }, category: true, quotes: { include: { customer: { select: { id: true, name: true, profilePicture: true } } }, orderBy: { createdAt: 'desc' } } },
      orderBy: { createdAt: 'desc' },
    });
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error getting your services' });
  }
});

// GET /api/services - list services with optional filters
router.get('/', async (req: Request, res: Response) => {
  const { search, category, serviceArea } = req.query;
  const filters: any = {};
  if (search) {
    filters.OR = [
      { title: { contains: String(search), mode: 'insensitive' } },
      { description: { contains: String(search), mode: 'insensitive' } },
    ];
  }
  if (category) filters.category = { name: String(category) };
  if (serviceArea) filters.serviceArea = { contains: String(serviceArea), mode: 'insensitive' };

  try {
    const services = await prisma.service.findMany({
      where: filters,
      include: { provider: { select: { id: true, name: true, profilePicture: true, location: true } }, category: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error getting services' });
  }
});

// GET /api/services/:id - get single service
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const service = await prisma.service.findUnique({ where: { id }, include: { provider: { select: { id: true, name: true, profilePicture: true, location: true } }, category: true } });
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error getting service' });
  }
});

// POST /api/services - create a new service (authenticated)
router.post('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  const providerId = req.user?.id;
  if (!providerId) return res.status(401).json({ message: 'Unauthenticated' });

  const { title, description, categoryId, serviceArea, startingPrice } = req.body;
  if (!title || !categoryId) return res.status(400).json({ message: 'Missing required fields: title, categoryId' });

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
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error creating service' });
  }
});

// PUT /api/services/:id - Update a service (owner only)
router.put('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const { id } = req.params;
  const { title, description, serviceArea, startingPrice, availability } = req.body;

  try {
    const service = await prisma.service.findUnique({ where: { id } });
    if (!service) return res.status(404).json({ message: 'Service not found' });
    if (service.providerId !== userId) return res.status(403).json({ message: 'Forbidden: You do not own this service' });

    const updatedService = await prisma.service.update({
      where: { id },
      data: {
        title,
        description,
        serviceArea,
        startingPrice: startingPrice ? parseFloat(startingPrice) : undefined,
        availability,
      },
    });
    res.json(updatedService);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error updating service' });
  }
});

// DELETE /api/services/:id - Delete a service (owner only)
router.delete('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const { id } = req.params;

  try {
    const service = await prisma.service.findUnique({ where: { id } });
    if (!service) return res.status(404).json({ message: 'Service not found' });
    if (service.providerId !== userId) return res.status(403).json({ message: 'Forbidden: You do not own this service' });

    await prisma.service.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error deleting service' });
  }
});

export default router;
