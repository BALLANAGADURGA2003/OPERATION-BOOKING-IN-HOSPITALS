const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentctrl');

// Route for fetching all appointments
router.get('/', appointmentController.getAllAppointments);

// Route for creating a new appointment
router.post('/', appointmentController.createAppointment);

// Route for updating an existing appointment
router.put('/:id', appointmentController.updateAppointment);

// Route for deleting an appointment
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
