import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../utils/hash';

const router = Router();
const prisma = new PrismaClient();

// Helper to generate JWT
const generateToken = (userId: number, email: string) => {
  const secret = process.env.JWT_SECRET as string;
  return jwt.sign({ userId, email }, secret, { expiresIn: '7d' });
};

// Register a new seller
router.post('/register', async (req: Request, res: Response) => {
  const { name, email, password, phone, city, profileImage } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' });
  }
  try {
    const existing = await prisma.seller.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: 'Email already in use' });
    }
    const hashed = await hashPassword(password);
    const seller = await prisma.seller.create({
      data: {
        name,
        email,
        password: hashed,
        phone,
        city,
        avatarUrl: profileImage,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        avatarUrl: true,
      },
    });
    const token = generateToken(seller.id, seller.email);
    return res.status(201).json({ token, user: seller });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }
  try {
    const seller = await prisma.seller.findUnique({ where: { email } });
    if (!seller) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const valid = await comparePassword(password, seller.password);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(seller.id, seller.email);
    const { password: _, ...safeUser } = seller;
    return res.json({ token, user: safeUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Get current authenticated user
router.get('/me', async (req: Request, res: Response) => {
  // @ts-ignore – auth middleware adds user
  const auth = (req as any).user;
  if (!auth) {
    return res.status(401).json({ message: 'Unauthenticated' });
  }
  const seller = await prisma.seller.findUnique({
    where: { id: auth.id },
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
  return res.json(seller);
});

export default router;
