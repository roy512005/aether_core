const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// @desc    Request a quote
// @route   POST /api/quote
// @access  Public
router.post('/', async (req, res) => {
    const { projectType, budgetRange, description, contactInfo } = req.body;

    try {
        const quote = await Quote.create({
            projectType,
            budgetRange,
            description,
            contactInfo,
        });

        res.status(201).json(quote);
    } catch (error) {
        res.status(400).json({ message: 'Invalid quote data' });
    }
});

module.exports = router;
