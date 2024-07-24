const mongoose = require('mongoose');

// Define the schema for the Appointment model
const appointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    appointmentDateTime: {
        day: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor', // Assuming you have a Doctor model
        required: true
    }
});

// Create the Appointment model based on the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
