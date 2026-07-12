"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hash_1 = require("../utils/hash");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Helper to generate JWT
const generateToken = (userId, email) => {
    const secret = process.env.JWT_SECRET;
    return jsonwebtoken_1.default.sign({ userId, email }, secret, { expiresIn: '7d' });
};
// Register a new seller
router.post('/register', async (req, res) => {
    const { name, email, password, phone, city, profileImage } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email and password are required' });
    }
    try {
        const existing = await prisma.seller.findUnique({ where: { email } });
        if (existing) {
            return res.status(409).json({ message: 'Email already in use' });
        }
        const hashed = await (0, hash_1.hashPassword)(password);
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
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});
// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }
    try {
        const seller = await prisma.seller.findUnique({ where: { email } });
        if (!seller) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const valid = await (0, hash_1.comparePassword)(password, seller.password);
        if (!valid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(seller.id, seller.email);
        const { password: _, ...safeUser } = seller;
        return res.json({ token, user: safeUser });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});
// Get current authenticated user
router.get('/me', async (req, res) => {
    // @ts-ignore – auth middleware adds user
    const auth = req.user;
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
exports.default = router;
