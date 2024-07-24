// doctorctrl.js
const Doctor = require('../models/doctormodel');

module.exports = {
    registerDoctor: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Check if the doctor already exists
            const existingDoctor = await Doctor.findOne({ email });

            if (existingDoctor) {
                return res.status(400).json({ message: 'Doctor already exists' });
            }

            // Create a new doctor without hashing the password
            const newDoctor = new Doctor({ email, password, ...req.body });
            await newDoctor.save();

            res.status(201).json({ message: 'Doctor registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    
    loginDoctor: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Find the doctor by email
            const doctor = await Doctor.findOne({ email });

            if (!doctor) {
                return res.status(404).json({ message: 'Doctor not found' });
            }

            // Check if the password is correct
            if (password !== doctor.password) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            // Return success message if login is successful
            res.status(200).json({ message: 'Doctor logged in successfully', doctorId: doctor._id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    getDoctors: async (req, res) => {
        try {
            // Fetch all doctors from the database
            const doctors = await Doctor.find({}, 'name age experience operationFee specialization');

            // Send the list of doctors as a JSON response
            res.json({ doctors });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    
    getDoctorAvailability: async (req, res) => {
        try {
            const doctorId = req.params.doctorId;
            // Fetch doctor's availability schedule based on their ID
            const doctor = await Doctor.findById(doctorId, 'availability availabilityTimes');
            // Send availability schedule as response
            res.json({ availability: doctor.availability, availabilityTimes: doctor.availabilityTimes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
};
