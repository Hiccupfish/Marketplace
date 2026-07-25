import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// POST /api/offers - Submit a new offer for a listing
router.post('/', async (req: Request, res: Response) => {
  try {
    const { listingId, buyerName, buyerEmail, buyerPhone, amountZar, message } = req.body;

    if (!listingId || !buyerName || !buyerEmail || amountZar == null) {
      return res.status(400).json({ message: 'Missing required offer fields: listingId, buyerName, buyerEmail, amountZar.' });
    }

    const listing = await prisma.listing.findUnique({
      where: { id: Number(listingId) },
      include: { seller: true }
    });

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found.' });
    }

    // Create Offer in DB
    const offer = await prisma.offer.create({
      data: {
        listingId: Number(listingId),
        buyerName: String(buyerName).trim(),
        buyerEmail: String(buyerEmail).trim(),
        buyerPhone: buyerPhone ? String(buyerPhone).trim() : null,
        amountZar: Number(amountZar),
        message: message ? String(message).trim() : null,
        status: 'PENDING'
      }
    });

    const sellerEmail = listing.seller?.email || 'seller@marketplace.co.za';
    const sellerPhone = listing.seller?.phone || '+27820000000';

    // Simulate Email Dispatch
    const emailSubject = `New Offer Received for "${listing.title}"`;
    const emailBody = `Hi ${listing.seller?.name || 'Seller'},\n\n` +
      `${buyerName} has submitted a new offer of R ${amountZar.toLocaleString()} for your item "${listing.title}".\n\n` +
      `Message: "${message || 'No additional message'}"\n` +
      `Buyer Contact: ${buyerEmail} ${buyerPhone ? '(' + buyerPhone + ')' : ''}\n\n` +
      `Review and accept or reject this offer here: http://localhost:4200/listings/${listingId}/offers\n\n` +
      `Marketplace Team`;

    console.log(`\n=================== [EMAIL NOTIFICATION SENT] ===================`);
    console.log(`To: ${sellerEmail}`);
    console.log(`Subject: ${emailSubject}`);
    console.log(`Body:\n${emailBody}`);
    console.log(`=================================================================\n`);

    // Simulate WhatsApp Dispatch & Deep Link Generation
    const waText = encodeURIComponent(
      `🔔 *New Offer Alert on Marketplace!*\n\n` +
      `Item: *${listing.title}*\n` +
      `Offer Amount: *R ${amountZar.toLocaleString()}*\n` +
      `Buyer: *${buyerName}* (${buyerEmail})\n` +
      `Review offer: http://localhost:4200/listings/${listingId}/offers`
    );
    const whatsappLink = `https://wa.me/${sellerPhone.replace(/[^0-9]/g, '')}?text=${waText}`;

    console.log(`================== [WHATSAPP NOTIFICATION SENT] ==================`);
    console.log(`To WhatsApp: ${sellerPhone}`);
    console.log(`Direct WA Link: ${whatsappLink}`);
    console.log(`=================================================================\n`);

    return res.status(201).json({
      offer,
      notifications: {
        emailSent: true,
        emailRecipient: sellerEmail,
        whatsAppSent: true,
        whatsAppRecipient: sellerPhone,
        whatsAppDeepLink: whatsappLink
      }
    });
  } catch (err: any) {
    console.error('Error creating offer:', err);
    return res.status(500).json({ message: 'Failed to create offer.', error: err.message });
  }
});

// GET /api/offers/listing/:listingId - Get all offers for a specific listing
router.get('/listing/:listingId', async (req: Request, res: Response) => {
  try {
    const listingId = Number(req.params.listingId);
    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
      include: { seller: true }
    });

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found.' });
    }

    const offers = await prisma.offer.findMany({
      where: { listingId },
      orderBy: { createdAt: 'desc' }
    });

    return res.json({ listing, offers });
  } catch (err: any) {
    console.error('Error fetching offers:', err);
    return res.status(500).json({ message: 'Failed to fetch offers.' });
  }
});

// GET /api/offers/:id - Get single offer details
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const offerId = Number(req.params.id);
    const offer = await prisma.offer.findUnique({
      where: { id: offerId },
      include: { listing: { include: { seller: true } } }
    });

    if (!offer) {
      return res.status(404).json({ message: 'Offer not found.' });
    }

    return res.json(offer);
  } catch (err: any) {
    return res.status(500).json({ message: 'Failed to fetch offer.' });
  }
});

// PATCH /api/offers/:id/status - Accept or Reject an offer
router.patch('/:id/status', async (req: Request, res: Response) => {
  try {
    const offerId = Number(req.params.id);
    const { status } = req.body; // 'ACCEPTED' | 'REJECTED'

    if (!['ACCEPTED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ message: 'Status must be ACCEPTED or REJECTED.' });
    }

    const updatedOffer = await prisma.offer.update({
      where: { id: offerId },
      data: { status }
    });

    console.log(`[OFFER UPDATED]: Offer #${offerId} set to ${status}`);

    return res.json(updatedOffer);
  } catch (err: any) {
    console.error('Error updating offer status:', err);
    return res.status(500).json({ message: 'Failed to update offer status.' });
  }
});

export default router;
