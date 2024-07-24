const Appointment = require('../models/appointment');

// Controller methods for handling CRUD operations on appointments
const appointmentCtrl = {
    // Get all appointments
    getAllAppointments: async (req, res) => {
        try {
            const appointments = await Appointment.find();
            res.json(appointments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    // Create a new appointment
    createAppointment: async (req, res) => {
        try {
            const { patientName, appointmentDateTime, doctorId } = req.body;
            const newAppointment = new Appointment({ patientName, appointmentDateTime, doctorId });
            await newAppointment.save();
            res.status(201).json({ message: 'Appointment created successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    // Update an existing appointment
    updateAppointment: async (req, res) => {
        try {
            const { id } = req.params;
            const { patientName, appointmentDateTime, doctorId } = req.body;
            await Appointment.findByIdAndUpdate(id, { patientName, appointmentDateTime, doctorId });
            res.json({ message: 'Appointment updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    // Delete an appointment
    deleteAppointment: async (req, res) => {
        try {
            const { id } = req.params;
            await Appointment.findByIdAndDelete(id);
            res.json({ message: 'Appointment deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
};

module.exports = appointmentCtrl;
