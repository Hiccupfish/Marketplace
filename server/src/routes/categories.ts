import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/categories - Get all categories
router.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error getting categories' });
  }
});

// GET /api/categories/:id - Get a single category
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        products: { take: 10, orderBy: { createdAt: 'desc' } },
        services: { take: 10, orderBy: { createdAt: 'desc' } },
        requests: { take: 10, orderBy: { createdAt: 'desc' } },
      },
    });
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error getting category' });
  }
});

export default router;
