// In userRoutes.js
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userctrl');

// Route to register a new user
router.post('/register', userCtrl.registerUser);

router.post('/login', userCtrl.loginUser);

module.exports = router;
