const mongoose = require('mongoose');

// Define doctor schema by extending user schema
const doctorSchema = new mongoose.Schema({
    // Inherit fields from user schema
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'doctor'], required: true }, // Role is required during registration
    name: { type: String, required: true },
    age: { type: Number, required: true },
    experience: { type: String, required: true },
    operationFee: { type: Number },
    // Additional fields specific to doctors
    specialization: { type: String, required: true },
    availability: {
        monday: { type: Boolean, default: false },
        tuesday: { type: Boolean, default: false },
        wednesday: { type: Boolean, default: false },
        thursday: { type: Boolean, default: false },
        friday: { type: Boolean, default: false },
        saturday: { type: Boolean, default: false },
        sunday: { type: Boolean, default: false }
    },
    availabilityTimes: {
        monday: { startTime: String, endTime: String },
        tuesday: { startTime: String, endTime: String },
        wednesday: { startTime: String, endTime: String },
        thursday: { startTime: String, endTime: String },
        friday: { startTime: String, endTime: String },
        saturday: { startTime: String, endTime: String },
        sunday: { startTime: String, endTime: String }
    }
    
});

// Create and export Doctor model
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
