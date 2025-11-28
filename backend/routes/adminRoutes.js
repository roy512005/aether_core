const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Contact = require('../models/Contact');
const Quote = require('../models/Quote');
const ContactInfo = require('../models/ContactInfo');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '30d',
    });
};

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
            req.admin = await Admin.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }
    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// @desc    Auth admin & get token
// @route   POST /api/admin/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            email: admin.email,
            token: generateToken(admin._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// @desc    Get all contact submissions
// @route   GET /api/admin/contacts
router.get('/contacts', protect, async (req, res) => {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.json(contacts);
});

// @desc    Delete contact
// @route   DELETE /api/admin/contacts/:id
router.delete('/contacts/:id', protect, async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
        await contact.deleteOne();
        res.json({ message: 'Contact removed' });
    } else {
        res.status(404).json({ message: 'Contact not found' });
    }
});

// @desc    Get all quote submissions
// @route   GET /api/admin/quotes
router.get('/quotes', protect, async (req, res) => {
    const quotes = await Quote.find({}).sort({ createdAt: -1 });
    res.json(quotes);
});

// @desc    Delete quote
// @route   DELETE /api/admin/quotes/:id
router.delete('/quotes/:id', protect, async (req, res) => {
    const quote = await Quote.findById(req.params.id);
    if (quote) {
        await quote.deleteOne();
        res.json({ message: 'Quote removed' });
    } else {
        res.status(404).json({ message: 'Quote not found' });
    }
});

// --- Projects CRUD ---
const Project = require('../models/Project');

router.get('/projects', protect, async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
});

router.post('/projects', protect, async (req, res) => {
    const project = await Project.create(req.body);
    res.json(project);
});

router.put('/projects/:id', protect, async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
});

router.delete('/projects/:id', protect, async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project removed' });
});

// --- Testimonials CRUD ---
const Testimonial = require('../models/Testimonial');

router.get('/testimonials', protect, async (req, res) => {
    const testimonials = await Testimonial.find({});
    res.json(testimonials);
});

router.post('/testimonials', protect, async (req, res) => {
    const testimonial = await Testimonial.create(req.body);
    res.json(testimonial);
});

router.put('/testimonials/:id', protect, async (req, res) => {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(testimonial);
});

router.delete('/testimonials/:id', protect, async (req, res) => {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: 'Testimonial removed' });
});

// @desc    Get site contact info
// @route   GET /api/admin/info
router.get('/info', protect, async (req, res) => {
    const info = await ContactInfo.findOne();
    res.json(info);
});

// @desc    Update site contact info
// @route   PUT /api/admin/info
router.put('/info', protect, async (req, res) => {
    const info = await ContactInfo.findOne();
    if (info) {
        info.email = req.body.email || info.email;
        info.phone = req.body.phone || info.phone;
        info.address = req.body.address || info.address;
        info.linkedin = req.body.linkedin || info.linkedin;
        info.twitter = req.body.twitter || info.twitter;
        info.instagram = req.body.instagram || info.instagram;

        const updatedInfo = await info.save();
        res.json(updatedInfo);
    } else {
        res.status(404).json({ message: 'Info not found' });
    }
});

module.exports = router;
