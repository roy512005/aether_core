const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const contact = await Contact.create({
            name,
            email,
            phone,
            message,
        });

        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: 'Invalid contact data' });
    }
});

module.exports = router;
