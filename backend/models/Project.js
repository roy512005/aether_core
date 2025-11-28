const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // URL or Gradient CSS
}, {
    timestamps: true,
});

module.exports = mongoose.model('Project', projectSchema);
