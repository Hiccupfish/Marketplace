import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


// export interface AuthRequest extends Request {
//     user?: {
//         userId: number;
//         email: string;
//     };
// }
// export const requireAuth = (
//     req: AuthRequest,
//     res: Response,
//     next: NextFunction
// ) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({
//             message: "Authentication required."
//         });
//     }

//     const token = authHeader.split(" ")[1];

//     try {
//         const decoded = jwt.verify(
//             token,
//             process.env.JWT_SECRET!
//         ) as {
//             userId: number;
//             email: string;
//         };

//         req.user = decoded;

//         next();
//     } catch {
//         return res.status(401).json({
//             message: "Invalid token."
//         });
//     }
// };

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
    if (!secret) {
        throw new Error('JWT_SECRET is not defined in the environment variables.');
    }
    return jsonwebtoken_1.default.sign({ userId, email }, secret, { expiresIn: '7d' });
};
// POST /api/auth/register - Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password, phoneNumber, location, profilePicture } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already in use' });
        }
        const hashedPassword = await (0, hash_1.hashPassword)(password);
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
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error during registration' });
    }
});
// POST /api/auth/login - Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isValidPassword = await (0, hash_1.comparePassword)(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const { password: _, ...safeUser } = user;
        const token = generateToken(user.id, user.email);
        return res.json({ token, user: safeUser });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error during login' });
    }
});
exports.default = router;


