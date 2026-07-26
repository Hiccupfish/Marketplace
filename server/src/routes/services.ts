import { Router } from 'express';

const router = Router();

// GET /api/services - Get all services (with filtering)
router.get('/', (req, res) => {
  res.json({ message: 'Get all services' });
});

// GET /api/services/:id - Get a single service
router.get('/:id', (req, res) => {
  res.json({ message: `Get service ${req.params.id}` });
});

// POST /api/services - Create a new service
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Create a new service' });
});

// POST /api/services/:id/quotes - Create a quote for a service
router.post('/:id/quotes', (req, res) => {
    res.status(201).json({ message: `Create a quote for service ${req.params.id}` });
});

export default router;
