"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireDriver = exports.requireBusiness = exports.requireProvider = exports.requireSeller = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const requireSeller = async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId)
        return res.status(401).json({ message: 'Unauthenticated' });
    try {
        const sellerProfile = await prisma.sellerProfile.findUnique({
            where: { userId },
        });
        if (!sellerProfile) {
            return res.status(403).json({ message: 'Forbidden: You must have a seller profile to perform this action' });
        }
        next();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error checking seller status' });
    }
};
exports.requireSeller = requireSeller;
const requireProvider = async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId)
        return res.status(401).json({ message: 'Unauthenticated' });
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { providerCapabilities: true },
        });
        if (!user || !user.providerCapabilities) {
            return res.status(403).json({ message: 'Forbidden: You must have provider capabilities to perform this action' });
        }
        const capabilities = JSON.parse(user.providerCapabilities);
        if (capabilities.length === 0) {
            return res.status(403).json({ message: 'Forbidden: You must have provider capabilities to perform this action' });
        }
        next();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error checking provider status' });
    }
};
exports.requireProvider = requireProvider;
const requireBusiness = async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId)
        return res.status(401).json({ message: 'Unauthenticated' });
    try {
        const businessProfile = await prisma.businessProfile.findUnique({
            where: { userId },
        });
        if (!businessProfile) {
            return res.status(403).json({ message: 'Forbidden: You must have a business profile to perform this action' });
        }
        next();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error checking business status' });
    }
};
exports.requireBusiness = requireBusiness;
const requireDriver = async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId)
        return res.status(401).json({ message: 'Unauthenticated' });
    try {
        const driverProfile = await prisma.driverProfile.findUnique({
            where: { userId },
        });
        if (!driverProfile) {
            return res.status(403).json({ message: 'Forbidden: You must have a driver profile to perform this action' });
        }
        next();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error checking driver status' });
    }
};
exports.requireDriver = requireDriver;
