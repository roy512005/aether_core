const mongoose = require('mongoose');

const testimonialSchema = mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    message: { type: String, required: true },
    avatar: { type: String }, // URL
}, {
    timestamps: true,
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
