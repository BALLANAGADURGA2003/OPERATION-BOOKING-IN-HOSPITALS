// In doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorCtrl = require('../controllers/doctorctrl');

// Route to register a new doctor
router.post('/register', doctorCtrl.registerDoctor);

// Route to log in a doctor
router.post('/login', doctorCtrl.loginDoctor);

// Route to fetch doctors' data
router.get('/', doctorCtrl.getDoctors);

// Route to fetch doctor's availability
router.get('/:doctorId/schedule', doctorCtrl.getDoctorAvailability);



module.exports = router;
