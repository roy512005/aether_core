const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    projectType: {
        type: String,
        required: true,
        enum: ['Website', 'App', 'Software', 'Other'],
    },
    budgetRange: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    contactInfo: {
        name: String,
        email: String,
        phone: String,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Quote', quoteSchema);
