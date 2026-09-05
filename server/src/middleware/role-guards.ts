import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const requireSeller = async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req as any).user?.id;
  if (!userId) return res.status(401).json({ message: 'Unauthenticated' });

  try {
    const sellerProfile = await prisma.sellerProfile.findUnique({
      where: { userId },
    });
    if (!sellerProfile) {
      return res.status(403).json({ message: 'Forbidden: You must have a seller profile to perform this action' });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error checking seller status' });
  }
};

export const requireProvider = async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req as any).user?.id;
  if (!userId) return res.status(401).json({ message: 'Unauthenticated' });

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { providerCapabilities: true },
    });
    if (!user || !user.providerCapabilities) {
      return res.status(403).json({ message: 'Forbidden: You must have provider capabilities to perform this action' });
    }
    const capabilities: string[] = JSON.parse(user.providerCapabilities);
    if (capabilities.length === 0) {
      return res.status(403).json({ message: 'Forbidden: You must have provider capabilities to perform this action' });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error checking provider status' });
  }
};

export const requireBusiness = async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req as any).user?.id;
  if (!userId) return res.status(401).json({ message: 'Unauthenticated' });

  try {
    const businessProfile = await prisma.businessProfile.findUnique({
      where: { userId },
    });
    if (!businessProfile) {
      return res.status(403).json({ message: 'Forbidden: You must have a business profile to perform this action' });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error checking business status' });
  }
};

export const requireDriver = async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req as any).user?.id;
  if (!userId) return res.status(401).json({ message: 'Unauthenticated' });

  try {
    const driverProfile = await prisma.driverProfile.findUnique({
      where: { userId },
    });
    if (!driverProfile) {
      return res.status(403).json({ message: 'Forbidden: You must have a driver profile to perform this action' });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error checking driver status' });
  }
};
