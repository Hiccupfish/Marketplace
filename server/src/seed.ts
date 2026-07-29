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

  // Create a sample South African service provider
  const providerEmail = 'provider@kasiverse.co.za';
  const provider = await prisma.user.upsert({
    where: { email: providerEmail },
    update: {},
    create: {
      email: providerEmail,
      name: 'Kasiverse Provider',
      password: await hashPassword('Password123!'),
      phoneNumber: '+27 82 765 4321',
      location: 'Durban, KwaZulu-Natal, South Africa',
      isVerified: true,
    }
  });

  // Ensure provider profile exists
  await prisma.serviceProviderProfile.upsert({
    where: { userId: provider.id },
    update: {},
    create: {
      userId: provider.id,
      bio: 'Experienced local tradesperson offering reliable services across KZN.',
      portfolio: JSON.stringify([]),
    }
  });

  // Seed example services
  const services = [
    {
      title: 'Home Electrical Repair',
      description: 'Qualified electrician offering fault finding and repairs for home electrics.',
      categoryName: 'Services',
      serviceArea: 'Durban',
      startingPrice: 450.0
    },
    {
      title: 'Garden Landscaping & Maintenance',
      description: 'Professional landscaping, lawn care and regular maintenance.',
      categoryName: 'Home & Garden',
      serviceArea: 'Cape Town',
      startingPrice: 300.0
    },
    {
      title: 'Mobile Phone Repair (Screen & Battery)',
      description: 'Fast, reliable screen replacements and battery swaps for popular models.',
      categoryName: 'Electronics',
      serviceArea: 'Johannesburg',
      startingPrice: 250.0
    }
  ];

  for (const s of services) {
    const categoryId = await getCategoryId(s.categoryName);
    const existing = await prisma.service.findFirst({ where: { title: s.title, providerId: provider.id } });
    if (existing) {
      await prisma.service.update({ where: { id: existing.id }, data: { description: s.description, serviceArea: s.serviceArea, startingPrice: s.startingPrice } });
    } else {
      await prisma.service.create({ data: { title: s.title, description: s.description, providerId: provider.id, categoryId, serviceArea: s.serviceArea, availability: 'AVAILABLE', startingPrice: s.startingPrice } });
    }
  }

  console.log('Categories, seller, products, provider and services seeded successfully');

  // --- Ensure request-related categories exist (plumbing, electrical, cleaning, etc.)
  const extraCategories = [
    'Plumbing', 'Electrical', 'Cleaning', 'Gardening', 'Moving', 'Beauty', 'Automotive', 'Home Repairs'
  ];
  for (const name of extraCategories) {
    await prisma.category.upsert({ where: { name }, update: {}, create: { name, icon: 'services' } });
  }

  // --- Ensure we have requester users to attach requests to
  let requesters = await prisma.user.findMany({ take: 10 });
  if (requesters.length === 0) {
    const sampleUsers = [
      { email: 'alice@example.co.za', name: 'Alice M', password: await hashPassword('Password123!'), phoneNumber: '+27 71 111 1111', location: 'Johannesburg, Gauteng, South Africa' },
      { email: 'bob@example.co.za', name: 'Bob T', password: await hashPassword('Password123!'), phoneNumber: '+27 72 222 2222', location: 'Cape Town, Western Cape, South Africa' },
      { email: 'carol@example.co.za', name: 'Carol N', password: await hashPassword('Password123!'), phoneNumber: '+27 73 333 3333', location: 'Durban, KwaZulu-Natal, South Africa' }
    ];

    requesters = [];
    for (const u of sampleUsers) {
      const user = await prisma.user.upsert({ where: { email: u.email }, update: {}, create: u });
      requesters.push(user);
    }
  }

  // --- Helper to build deterministic ids for upsert
  const makeId = (title: string, requesterId: string) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `${slug}-${requesterId.slice(0,8)}`;
  };

  // --- Create at least 15 realistic South African requests
  const sampleRequests = [
    { title: 'Fix leaking kitchen sink', description: 'Need a plumber to fix a persistent leak under the kitchen sink. Prefer weekend visit.', marketplaceType: 'SERVICE', categoryName: 'Plumbing', budget: 600, location: 'Johannesburg', daysUntilDeadline: 7, preferredFulfilment: 'ON_SITE', status: 'OPEN', proposalCount: 0, shortlistedCount: 0 },
    { title: 'Install prepaid electricity meter', description: 'Qualified electrician required to install a prepaid meter and replace consumer unit.', marketplaceType: 'SERVICE', categoryName: 'Electrical', budget: 1500, location: 'Pretoria', daysUntilDeadline: 10, preferredFulfilment: 'ON_SITE', status: 'OPEN', proposalCount: 1, shortlistedCount: 0 },
    { title: 'One-bedroom flat cleaning', description: 'Looking for regular weekly cleaning for a small one-bedroom apartment.', marketplaceType: 'SERVICE', categoryName: 'Cleaning', budget: 300, location: 'Cape Town', daysUntilDeadline: 5, preferredFulfilment: 'ON_SITE', status: 'OPEN', proposalCount: 2, shortlistedCount: 0 },
    { title: 'Garden grass cutting', description: 'Need a gardener for quarterly lawn mowing and hedge trimming.', marketplaceType: 'SERVICE', categoryName: 'Gardening', budget: 450, location: 'Durban', daysUntilDeadline: 14, preferredFulfilment: 'ON_SITE', status: 'OPEN', proposalCount: 0, shortlistedCount: 0 },
    { title: 'Help move small 2-bedroom house', description: 'Looking for moving assistance with 2 movers and a small truck, ~15km move.', marketplaceType: 'SERVICE', categoryName: 'Moving', budget: 1200, location: 'Polokwane', daysUntilDeadline: 21, preferredFulfilment: 'ON_SITE', status: 'OPEN', proposalCount: 0, shortlistedCount: 0 },
    { title: 'Wedding photographer (August)', description: 'Require an experienced photographer for a 200-guest wedding in August.', marketplaceType: 'SERVICE', categoryName: 'Services', budget: 8000, location: 'Cape Town', daysUntilDeadline: 30, preferredFulfilment: 'ON_SITE', status: 'RECEIVING_PROPOSALS', proposalCount: 3, shortlistedCount: 1 },
    { title: 'Second-hand laptop (good battery)', description: 'Looking for a used laptop for study (i5, 8GB RAM, 256GB SSD).', marketplaceType: 'PRODUCT', categoryName: 'Electronics', budget: 6500, location: 'Johannesburg', daysUntilDeadline: 12, preferredFulfilment: 'COLLECTION', status: 'OPEN', proposalCount: 0, shortlistedCount: 0 },
    { title: 'Interior house painting - 3 rooms', description: 'Painter needed to paint lounge and two bedrooms; supply materials preferred.', marketplaceType: 'SERVICE', categoryName: 'Home Repairs', budget: 7000, location: 'Pretoria', daysUntilDeadline: 18, preferredFulfilment: 'ON_SITE', status: 'OPEN', proposalCount: 1, shortlistedCount: 0 },
    { title: 'Car service and brake check', description: 'Full service and brake check for Toyota Corolla 2012.', marketplaceType: 'SERVICE', categoryName: 'Automotive', budget: 1200, location: 'Durban', daysUntilDeadline: 9, preferredFulfilment: 'ON_SITE', status: 'OPEN', proposalCount: 0, shortlistedCount: 0 },
    { title: 'Bridal makeup artist', description: 'Experienced makeup artist for bride and 3 bridesmaids on wedding day.', marketplaceType: 'SERVICE', categoryName: 'Beauty', budget: 2000, location: 'Cape Town', daysUntilDeadline: 25, preferredFulfilment: 'ON_SITE', status: 'RECEIVING_PROPOSALS', proposalCount: 4, shortlistedCount: 1 },
    { title: 'Replace broken geyser valve', description: 'Geyser valve leaking; plumber to inspect and replace if needed.', marketplaceType: 'SERVICE', categoryName: 'Plumbing', budget: 900, location: 'Johannesburg', daysUntilDeadline: 6, preferredFulfilment: 'ON_SITE', status: 'OPEN', proposalCount: 0, shortlistedCount: 0 },
    { title: 'Office deep-clean required', description: 'One-off deep clean for small office (10 desks) after renovation.', marketplaceType: 'SERVICE', categoryName: 'Cleaning', budget: 2500, location: 'Pretoria', daysUntilDeadline: 11, preferredFulfilment: 'ON_SITE', status: 'UNDER_REVIEW', proposalCount: 2, shortlistedCount: 1 },
    { title: 'Weed and re-turf small lawn', description: 'Prepare soil and lay turf for small front lawn.', marketplaceType: 'SERVICE', categoryName: 'Gardening', budget: 1800, location: 'Durban', daysUntilDeadline: 16, preferredFulfilment: 'ON_SITE', status: 'OPEN', proposalCount: 0, shortlistedCount: 0 },
    { title: 'Looking for used DSLR camera', description: 'Canon EOS 80D or similar in good condition for hobby photography.', marketplaceType: 'PRODUCT', categoryName: 'Electronics', budget: 8500, location: 'Cape Town', daysUntilDeadline: 20, preferredFulfilment: 'COLLECTION', status: 'OPEN', proposalCount: 0, shortlistedCount: 0 },
    { title: 'Install burglar alarm system', description: 'Security company to install alarm and sensors for 3-bedroom house.', marketplaceType: 'SERVICE', categoryName: 'Home Repairs', budget: 4500, location: 'Johannesburg', daysUntilDeadline: 28, preferredFulfilment: 'ON_SITE', status: 'RECEIVING_PROPOSALS', proposalCount: 2, shortlistedCount: 0 }
  ];

  // create/upsert requests
  for (let i = 0; i < sampleRequests.length; i++) {
    const r = sampleRequests[i];
    const requester = requesters[i % requesters.length];
    const categoryId = await getCategoryId(r.categoryName);
    const id = makeId(r.title, requester.id);
    const deadline = new Date(Date.now() + (r.daysUntilDeadline || 14) * 24 * 60 * 60 * 1000);

    await prisma.request.upsert({
      where: { id },
      update: {
        title: r.title,
        description: r.description,
        marketplaceType: r.marketplaceType,
        categoryId,
        budget: r.budget,
        location: r.location,
        deadline,
        preferredFulfilment: r.preferredFulfilment,
        status: r.status,
        proposalCount: r.proposalCount,
        shortlistedCount: r.shortlistedCount
      },
      create: {
        id,
        title: r.title,
        description: r.description,
        marketplaceType: r.marketplaceType,
        requester: { connect: { id: requester.id } },
        category: { connect: { id: categoryId } },
        budget: r.budget,
        location: r.location,
        deadline,
        preferredFulfilment: r.preferredFulfilment,
        status: r.status,
        proposalCount: r.proposalCount,
        shortlistedCount: r.shortlistedCount
      }
    });
  }

  console.log('Requests seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
