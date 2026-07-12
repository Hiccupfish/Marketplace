import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all listings with optional filters
router.get('/', async (req: Request, res: Response) => {
  const { search, category, city, seller } = req.query;
  const filters: any = {};
  if (search) {
    filters.OR = [
      { title: { contains: String(search), mode: 'insensitive' } },
      { description: { contains: String(search), mode: 'insensitive' } },
    ];
  }
  if (category) filters.category = String(category);
  if (city) filters.city = String(city);
  if (seller) filters.sellerId = Number(seller);
  if (seller) filters.sellerId = Number(seller);
  try {
    const listings = await prisma.listing.findMany({
      where: filters,
      include: { seller: { select: { id: true, name: true, avatarUrl: true, city: true } } },
      orderBy: { createdAt: 'desc' },
    });
    res.json(listings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single listing
router.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const listing = await prisma.listing.findUnique({
      where: { id },
      include: { seller: { select: { id: true, name: true, avatarUrl: true, city: true, rating: true } } },
    });
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new listing (authenticated)
router.post('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  const sellerId = req.user?.id;
  if (!sellerId) return res.status(401).json({ message: 'Unauthenticated' });
  const { title, description, priceZar, category, city } = req.body;
  if (!title || !priceZar || !category || !city) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const listing = await prisma.listing.create({
      data: { title, description, priceZar, category, city, sellerId },
    });
    res.status(201).json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update listing (owner only)
router.put('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const sellerId = req.user?.id;
  const id = Number(req.params.id);
  try {
    const listing = await prisma.listing.findUnique({ where: { id } });
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    if (listing.sellerId !== sellerId) return res.status(403).json({ message: 'Forbidden' });
    const updated = await prisma.listing.update({
      where: { id },
      data: req.body,
    });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete listing (owner only)
router.delete('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const sellerId = req.user?.id;
  const id = Number(req.params.id);
  try {
    const listing = await prisma.listing.findUnique({ where: { id } });
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    if (listing.sellerId !== sellerId) return res.status(403).json({ message: 'Forbidden' });
    await prisma.listing.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
