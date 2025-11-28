const express = require('express');
const router = express.Router();

// @desc    Handle chat messages
// @route   POST /api/chat
// @access  Public
router.post('/', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ message: 'Message is required' });
    }

    const lowerMsg = message.toLowerCase();
    let botResponse = "Thanks for your message! Our team will get back to you shortly.";

    // Simple keyword matching logic
    if (lowerMsg.includes('quote') || lowerMsg.includes('price') || lowerMsg.includes('cost')) {
        botResponse = "You can request a free quote by clicking the 'Get a Quote' button in the menu! We offer competitive pricing tailored to your needs.";
    } else if (lowerMsg.includes('service') || lowerMsg.includes('offer') || lowerMsg.includes('do')) {
        botResponse = "We offer Web Development, App Development, UI/UX Design, and AI Solutions. Check out our Services page for more details!";
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone')) {
        botResponse = "You can reach us at contact@cybertech.com or +1 (555) 012-3456. Or use the contact form on our Contact page.";
    } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        botResponse = "Hello there! I'm your Cyber Assistant. How can I help you elevate your digital presence today?";
    } else if (lowerMsg.includes('portfolio') || lowerMsg.includes('work') || lowerMsg.includes('project')) {
        botResponse = "Our portfolio showcases our best work. Visit the Portfolio page to see what we've built for other clients.";
    }

    // Simulate network delay for realism
    setTimeout(() => {
        res.json({ response: botResponse });
    }, 500);
});

module.exports = router;
