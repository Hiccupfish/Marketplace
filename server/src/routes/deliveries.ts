import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// GET /api/deliveries - Get all open delivery jobs (for drivers)
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
    // TODO: Check if user is a driver
    try {
        const deliveryJobs = await prisma.deliveryJob.findMany({
            where: { status: 'OPEN' },
            include: {
                product: {
                    select: {
                        title: true,
                        images: true,
                        seller: { select: { location: true } }
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
        });
        res.json(deliveryJobs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting delivery jobs' });
    }
});

// GET /api/deliveries/:jobId - Get details for a single delivery job
router.get('/:jobId', authenticateToken, async (req: AuthRequest, res: Response) => {
    const { jobId } = req.params;
    try {
        const deliveryJob = await prisma.deliveryJob.findUnique({
            where: { id: jobId },
            include: {
                product: { include: { seller: true } },
                offers: {
                    include: {
                        driver: { select: { id: true, name: true, profilePicture: true, isVerified: true } }
                    }
                }
            }
        });
        if (!deliveryJob) return res.status(404).json({ message: 'Delivery job not found' });

        // TODO: Add authorization - only involved parties (buyer, seller, drivers who offered) can see details

        res.json(deliveryJob);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error getting delivery job details' });
    }
});

// POST /api/deliveries/:jobId/offers - Submit an offer for a delivery job (for drivers)
router.post('/:jobId/offers', authenticateToken, async (req: AuthRequest, res: Response) => {
    const driverId = req.user?.id;
    if (!driverId) return res.status(401).json({ message: 'Unauthenticated' });

    // TODO: Check if user has a driver profile

    const { jobId } = req.params;
    const { fee, estimatedTime, vehicleType, message } = req.body;

    if (!fee || !estimatedTime) {
        return res.status(400).json({ message: 'Fee and estimatedTime are required' });
    }

    try {
        // Ensure job exists and is open
        const job = await prisma.deliveryJob.findFirst({
            where: { id: jobId, status: 'OPEN' }
        });
        if (!job) return res.status(404).json({ message: 'Delivery job not found or is no longer open' });

        const deliveryOffer = await prisma.deliveryOffer.create({
            data: {
                fee: parseFloat(fee),
                estimatedTime,
                vehicleType,
                message,
                job: { connect: { id: jobId } },
                driver: { connect: { id: driverId } },
            }
        });

        // Update job status
        await prisma.deliveryJob.update({
            where: { id: jobId },
            data: { status: 'DRIVER_OFFERED' }
        });

        res.status(201).json(deliveryOffer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error creating delivery offer' });
    }
});

// PATCH /api/deliveries/:jobId/offers/:offerId/accept - Accept a delivery offer (for buyer/seller)
router.patch('/:jobId/offers/:offerId/accept', authenticateToken, async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
    const { jobId, offerId } = req.params;

    try {
        const job = await prisma.deliveryJob.findUnique({
            where: { id: jobId },
            include: { product: true }
        });

        if (!job) return res.status(404).json({ message: 'Delivery job not found' });

        // Authorization: only buyer or seller can accept
        const product = await prisma.product.findUnique({
            where: { id: job.productId },
            include: { offers: { where: { status: 'ACCEPTED' } } }
        });
        const buyerId = product?.offers[0]?.buyerId;
        const sellerId = product?.sellerId;

        if (userId !== buyerId && userId !== sellerId) {
            return res.status(403).json({ message: 'Forbidden: Only the buyer or seller can accept an offer' });
        }

        if (job.status !== 'DRIVER_OFFERED') {
            return res.status(400).json({ message: 'Job is not in a state to be accepted' });
        }

        const offerToAccept = await prisma.deliveryOffer.findUnique({ where: { id: offerId }});
        if (!offerToAccept || offerToAccept.jobId !== jobId) {
            return res.status(404).json({ message: 'Offer not found for this job' });
        }

        // Transaction to update everything
        const [, updatedJob] = await prisma.$transaction([
            // Reject all other offers for this job
            prisma.deliveryOffer.updateMany({
                where: { jobId: jobId, NOT: { id: offerId } },
                data: { status: 'REJECTED' }
            }),
            // Accept the chosen offer and update the job
            prisma.deliveryJob.update({
                where: { id: jobId },
                data: {
                    status: 'DRIVER_SELECTED',
                    selectedOfferId: offerId,
                    selectedDriverId: offerToAccept.driverId,
                    offers: {
                        update: {
                            where: { id: offerId },
                            data: { status: 'ACCEPTED' }
                        }
                    }
                },
                include: { offers: true }
            })
        ]);

        res.json(updatedJob);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error accepting delivery offer' });
    }
});


export default router;