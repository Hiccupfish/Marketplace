"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    // Clear existing data
    await prisma.listing.deleteMany();
    await prisma.seller.deleteMany();
    // Create mock sellers
    const seller1 = await prisma.seller.create({
        data: {
            name: 'Alice Seller',
            email: 'alice@example.com',
            password: '$2a$10$placeholderhash', // password will be hashed via registration normally
            phone: '123-456-7890',
            city: 'New York',
            avatarUrl: null,
        },
    });
    const seller2 = await prisma.seller.create({
        data: {
            name: 'Bob Trader',
            email: 'bob@example.com',
            password: '$2a$10$placeholderhash',
            phone: '987-654-3210',
            city: 'Los Angeles',
            avatarUrl: null,
        },
    });
    // Create mock listings
    await prisma.listing.createMany({
        data: [
            {
                title: 'Vintage Chair',
                description: 'A comfortable vintage wooden chair.',
                priceZar: 120.0,
                category: 'Furniture',
                city: 'New York',
                sellerId: seller1.id,
            },
            {
                title: 'Antique Lamp',
                description: 'An antique lamp with brass finish.',
                priceZar: 85.5,
                category: 'Lighting',
                city: 'Los Angeles',
                sellerId: seller2.id,
            },
            {
                title: 'Modern Sofa',
                description: 'A sleek modern sofa for living rooms.',
                priceZar: 350.0,
                category: 'Furniture',
                city: 'New York',
                sellerId: seller1.id,
            },
        ],
    });
    console.log('Seed data inserted successfully');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
