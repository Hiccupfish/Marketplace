"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/requests - Get all requests (with filtering)
router.get('/', (req, res) => {
    res.json({ message: 'Get all requests' });
});
// GET /api/requests/:id - Get a single request
router.get('/:id', (req, res) => {
    res.json({ message: `Get request ${req.params.id}` });
});
// POST /api/requests - Create a new request
router.post('/', (req, res) => {
    res.status(201).json({ message: 'Create a new request' });
});
// POST /api/requests/:id/offers - Create an offer for a request
router.post('/:id/offers', (req, res) => {
    res.status(201).json({ message: `Create an offer for request ${req.params.id}` });
});
exports.default = router;
