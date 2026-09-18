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
      select: { providerCapabilities: true, providerProfile: { select: { id: true } } },
    });

    let capabilities: string[] = [];
    if (user?.providerCapabilities) {
      try {
        const parsed = JSON.parse(user.providerCapabilities);
        capabilities = Array.isArray(parsed) ? parsed : [];
      } catch {
        capabilities = [];
      }
    }

    // A service provider profile is the app's own record that this user provides
    // services, so it counts as a capability alongside the providerCapabilities flag.
    const isProvider = capabilities.length > 0 || Boolean(user?.providerProfile);
    if (!user || !isProvider) {
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
