import { PrismaClient } from '@prisma/client';
import { hashPassword } from './utils/hash';

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

  // Create a sample South African seller
  const sellerEmail = 'seller@kasiverse.co.za';
  const seller = await prisma.user.upsert({
    where: { email: sellerEmail },
    update: {},
    create: {
      email: sellerEmail,
      name: 'Kasiverse Seller',
      password: await hashPassword('Password123!'),
      phoneNumber: '+27 71 123 4567',
      location: 'Cape Town, Western Cape, South Africa',
      isVerified: true,
    }
  });

  // Helper to find category id
  const getCategoryId = async (name: string) => {
    const c = await prisma.category.findUnique({ where: { name } });
    if (!c) throw new Error(`Category ${name} not found`);
    return c.id;
  };

  // Seed example products with South African context
  const products = [
    {
      title: 'Samsung Galaxy S23 (128GB) - Unlocked',
      description: 'Well-kept Samsung Galaxy S23, 128GB, black. Minor signs of use. Battery 90%.',
      price: 9999.0, // ZAR
      categoryName: 'Electronics',
      location: 'Cape Town, Western Cape',
      images: JSON.stringify(['https://example.com/images/galaxy-s23-1.jpg']),
      deliveryEnabled: true,
      fulfilmentOptions: 'COLLECTION,DELIVERY'
    },
    {
      title: 'Used Toyota Corolla 2015 - Manual',
      description: 'Reliable Toyota Corolla with full service history. 180,000 km. Good condition.',
      price: 95000.0,
      categoryName: 'Vehicles',
      location: 'Johannesburg, Gauteng',
      images: JSON.stringify(['https://example.com/images/corolla-2015-1.jpg']),
      deliveryEnabled: false,
      fulfilmentOptions: 'COLLECTION'
    },
    {
      title: 'Handmade African Beaded Necklace',
      description: 'Unique handmade beaded necklace made by local artisans in KwaZulu-Natal.',
      price: 350.0,
      categoryName: 'Fashion',
      location: 'Durban, KwaZulu-Natal',
      images: JSON.stringify(['https://example.com/images/beaded-necklace.jpg']),
      deliveryEnabled: true,
      fulfilmentOptions: 'COLLECTION,DELIVERY'
    },
    {
      title: 'Solid Oak Dining Table (Seats 6)',
      description: 'Custom solid oak dining table made in Cape Town. Includes local delivery within metro areas.',
      price: 8500.0,
      categoryName: 'Home & Garden',
      location: 'Cape Town, Western Cape',
      images: JSON.stringify(['https://example.com/images/dining-table.jpg']),
      deliveryEnabled: true,
      fulfilmentOptions: 'COLLECTION,DELIVERY'
    }
  ];

  for (const p of products) {
    const categoryId = await getCategoryId(p.categoryName);
    // upsert by title + seller to avoid duplicates
    await prisma.product.upsert({
      where: { id: `${p.title}-${seller.id}` },
      update: {
        price: p.price,
        description: p.description,
        location: p.location,
        images: p.images,
        deliveryEnabled: p.deliveryEnabled,
        fulfilmentOptions: p.fulfilmentOptions
      },
      create: {
        id: `${p.title}-${seller.id}`,
        title: p.title,
        description: p.description,
        price: p.price,
        sellerId: seller.id,
        categoryId,
        location: p.location,
        images: p.images,
        deliveryEnabled: p.deliveryEnabled,
        fulfilmentOptions: p.fulfilmentOptions
      }
    });
  }

  console.log('Categories, seller and products seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
