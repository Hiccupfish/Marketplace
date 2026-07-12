import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all sellers
router.get('/', async (req: Request, res: Response) => {
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get seller by ID with their listings
router.get('/:id', async (req: Request, res: Response) => {
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
    if (!seller) return res.status(404).json({ message: 'Seller not found' });
    res.json(seller);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update seller profile (owner only)
router.put('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const sellerId = req.user?.id;
  const id = Number(req.params.id);
  if (sellerId !== id) return res.status(403).json({ message: 'Forbidden' });
  try {
    const updated = await prisma.seller.update({
      where: { id },
      data: req.body,
    });
    const { password, ...safe } = updated;
    res.json(safe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
