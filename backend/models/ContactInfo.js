const mongoose = require('mongoose');

const contactInfoSchema = mongoose.Schema({
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    linkedin: { type: String },
    twitter: { type: String },
    instagram: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('ContactInfo', contactInfoSchema);
