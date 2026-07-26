import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../utils/hash';

const router = Router();
const prisma = new PrismaClient();

// Helper to generate JWT
const generateToken = (userId: string, email: string) => {
  const secret = process.env.JWT_SECRET as string;
  if (!secret) {
      throw new Error('JWT_SECRET is not defined in the environment variables.');
  }
  return jwt.sign({ userId, email }, secret, { expiresIn: '7d' });
};

// POST /api/auth/register - Register a new user
router.post('/register', async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber, location, profilePicture } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phoneNumber,
        location,
        profilePicture,
      },
    });

    const { password: _, ...safeUser } = user;
    const token = generateToken(user.id, user.email);
    return res.status(201).json({ token, user: safeUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error during registration' });
  }
});

// POST /api/auth/login - Login a user
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { password: _, ...safeUser } = user;
    const token = generateToken(user.id, user.email);
    return res.json({ token, user: safeUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error during login' });
  }
});

export default router;