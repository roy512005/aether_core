const express = require('express');
const router = express.Router();
const ContactInfo = require('../models/ContactInfo');

const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');

// @desc    Get site contact info (Public)
// @route   GET /api/public/info
router.get('/info', async (req, res) => {
    try {
        const info = await ContactInfo.findOne();
        res.json(info);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
});

router.get('/testimonials', async (req, res) => {
    const testimonials = await Testimonial.find({});
    res.json(testimonials);
});

module.exports = router;
