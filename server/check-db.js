const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const requests = await prisma.request.findMany();
  console.log('Requests:', JSON.stringify(requests, null, 2));
  const offers = await prisma.requestOffer.findMany();
  console.log('Offers:', JSON.stringify(offers, null, 2));
  const categories = await prisma.category.findMany();
  console.log('Categories:', JSON.stringify(categories, null, 2));
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
