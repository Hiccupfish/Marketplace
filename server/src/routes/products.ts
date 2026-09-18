import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { requireSeller } from '../middleware/role-guards';

const router = Router();
const prisma = new PrismaClient();

// GET /api/products/my-products - Get authenticated user's products
router.get('/my-products', authenticateToken, async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  if (!userId) return res.status(401).json({ message: 'Unauthenticated' });

  try {
    const products = await prisma.product.findMany({
      where: { sellerId: userId },
      include: {
        seller: { select: { id: true, name: true, profilePicture: true, location: true, isVerified: true, sellerProfile: { select: { sellerType: true } } } },
        category: true,
        offers: { include: { buyer: { select: { id: true, name: true, profilePicture: true } } }, orderBy: { createdAt: 'desc' } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error getting your products' });
  }
});

// GET /api/products - Get all products with optional filters
router.get('/', async (req: Request, res: Response) => {
  const { search, category, location, sellerId } = req.query;
  const filters: any = {
    isAvailable: true,
  };

  if (search) {
    filters.OR = [
      { title: { contains: String(search) } },
      { description: { contains: String(search) } },
    ];
  }
  if (category) filters.category = { name: String(category) };
  if (location) filters.location = { contains: String(location) };
  if (sellerId) filters.sellerId = String(sellerId);

  try {
    const products = await prisma.product.findMany({
      where: filters,
      include: {
        seller: { select: { id: true, name: true, profilePicture: true, location: true, isVerified: true, sellerProfile: { select: { sellerType: true } } } },
        category: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error getting products' });
  }
});

// GET /api/products/:id - Get a single product
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        seller: { select: { id: true, name: true, profilePicture: true, location: true, isVerified: true, _count: { select: { reviewsReceived: true } }, sellerProfile: { select: { sellerType: true } } } },
        category: true,
      },
    });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error getting product' });
  }
});

// POST /api/products - Create a new product (authenticated sellers only)
router.post('/', authenticateToken, requireSeller, async (req: AuthRequest, res: Response) => {
  const sellerId = req.user?.id;
  if (!sellerId) return res.status(401).json({ message: 'Unauthenticated' });

  const { title, description, price, priceZar, categoryId, category, location, city, images, imageUrl } = req.body;

  const rawPrice = price != null ? price : priceZar;
  if (!title || rawPrice == null) {
    return res.status(400).json({ message: 'Missing required fields: title, price (or priceZar)' });
  }

  const catVal = categoryId || category;
  if (!catVal) {
    return res.status(400).json({ message: 'Missing required field: category (or categoryId)' });
  }

  const parsedPrice = parseFloat(String(rawPrice));
  if (isNaN(parsedPrice) || parsedPrice < 0) {
    return res.status(400).json({ message: 'Price must be a valid positive number' });
  }

  try {
    // Resolve category by ID or by Name
    let resolvedCategoryId: string;
    const existingCat = await prisma.category.findFirst({
      where: {
        OR: [
          { id: String(catVal) },
          { name: String(catVal) }
        ]
      }
    });

    if (existingCat) {
      resolvedCategoryId = existingCat.id;
    } else {
      // Auto-create category if it does not exist
      const newCat = await prisma.category.create({
        data: { name: String(catVal), icon: 'other' }
      });
      resolvedCategoryId = newCat.id;
    }

    // Process images array or single image URL
    let formattedImages: string | undefined = undefined;
    if (images) {
      if (Array.isArray(images)) {
        formattedImages = JSON.stringify(images.filter(img => typeof img === 'string' && img.trim().length > 0));
      } else if (typeof images === 'string' && images.trim()) {
        try {
          const parsed = JSON.parse(images);
          formattedImages = Array.isArray(parsed) ? JSON.stringify(parsed) : JSON.stringify([images.trim()]);
        } catch {
          formattedImages = JSON.stringify([images.trim()]);
        }
      }
    } else if (imageUrl && typeof imageUrl === 'string' && imageUrl.trim()) {
      formattedImages = JSON.stringify([imageUrl.trim()]);
    }

    const resolvedLocation = location || city || 'Location not specified';

    const product = await prisma.product.create({
      data: {
        title: title.trim(),
        description: description ? description.trim() : '',
        price: parsedPrice,
        location: resolvedLocation,
        images: formattedImages,
        seller: { connect: { id: sellerId } },
        category: { connect: { id: resolvedCategoryId } },
      },
      include: {
        category: true,
        seller: { select: { id: true, name: true, profilePicture: true, location: true, isVerified: true, sellerProfile: { select: { sellerType: true } } } }
      }
    });
    res.status(201).json(product);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ message: 'Server error creating product' });
  }
});


// PUT /api/products/:id - Update a product (owner only)
router.put('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const { id } = req.params;
  const { title, description, price, isAvailable } = req.body;

  try {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.sellerId !== userId) return res.status(403).json({ message: 'Forbidden: You do not own this product' });

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        title,
        description,
        price: price ? parseFloat(price) : undefined,
        isAvailable,
      },
    });
    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error updating product' });
  }
});

// DELETE /api/products/:id - Delete a product (owner only)
router.delete('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const { id } = req.params;

  try {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.sellerId !== userId) return res.status(403).json({ message: 'Forbidden: You do not own this product' });

    await prisma.product.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error deleting product' });
  }
});

// --- Product Offers ---

// POST /api/products/:id/offers - Create an offer for a product
router.post('/:id/offers', authenticateToken, async (req: AuthRequest, res: Response) => {
    const buyerId = req.user?.id;
    const { id: productId } = req.params;
    const { price } = req.body;

    if (!buyerId) return res.status(401).json({ message: 'Unauthenticated' });
    if (!price) return res.status(400).json({ message: 'Price is required' });

    try {
        const product = await prisma.product.findUnique({ where: { id: productId } });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        if (product.sellerId === buyerId) return res.status(400).json({ message: 'You cannot make an offer on your own product' });

        const offer = await prisma.productOffer.create({
            data: {
                price: parseFloat(price),
                product: { connect: { id: productId } },
                buyer: { connect: { id: buyerId } },
            }
        });
        res.status(201).json(offer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error creating offer' });
    }
});

// GET /api/products/:id/offers - Get all offers for a product (owner only)
router.get('/:id/offers', authenticateToken, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
    const { id: productId } = req.params;

    try {
        const product = await prisma.product.findUnique({ where: { id: productId } });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        if (product.sellerId !== userId) return res.status(403).json({ message: 'Forbidden: You do not own this product' });

        const offers = await prisma.productOffer.findMany({
            where: { productId },
            include: { buyer: { select: { id: true, name: true, email: true, phoneNumber: true, profilePicture: true } } },
            orderBy: { createdAt: 'desc' },
        });
        res.json(offers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting offers' });
    }
});

// PATCH /api/products/:id/offers/:offerId/status - Accept/Reject offer (owner only)
router.patch('/:id/offers/:offerId/status', authenticateToken, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
    const { id: productId, offerId } = req.params;
    const { status } = req.body;

    try {
        const product = await prisma.product.findUnique({ where: { id: productId } });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        if (product.sellerId !== userId) return res.status(403).json({ message: 'Forbidden: You do not own this product' });

        const offer = await prisma.productOffer.findUnique({ where: { id: offerId } });
        if (!offer || offer.productId !== productId) {
            return res.status(404).json({ message: 'Offer not found for this product' });
        }

        const updatedOffer = await prisma.productOffer.update({
            where: { id: offerId },
            data: { status: status || 'VIEWED' },
            include: { buyer: { select: { id: true, name: true, profilePicture: true } } }
        });

        res.json(updatedOffer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error updating offer status' });
    }
});

export default router;