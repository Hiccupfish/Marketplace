import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed categories
  const categories = [
    { name: 'Electronics', icon: 'electronics' },
    { name: 'Vehicles', icon: 'vehicles' },
    { name: 'Property', icon: 'property' },
    { name: 'Fashion', icon: 'fashion' },
    { name: 'Home & Garden', icon: 'home' },
    { name: 'Services', icon: 'services' },
    { name: 'Other', icon: 'other' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: cat,
    });
  }

  console.log('Categories seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
