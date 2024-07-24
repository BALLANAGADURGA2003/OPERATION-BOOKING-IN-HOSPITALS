const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'patient'], required: true },
});

// Create and export User model
const User = mongoose.model('User', userSchema);
module.exports = User;
