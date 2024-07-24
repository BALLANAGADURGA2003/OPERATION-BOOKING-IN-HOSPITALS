const express = require('express');
const router = express.Router();
const User = require('../models/usermodel'); // Import your User model

module.exports = {
    registerUser: async (req, res) => {
        try {
            const { email, password, role } = req.body;

            // Check if the email, password, and role fields are provided
            if (!email || !password || !role) {
                return res.status(400).json({ message: 'Email, password, and role are required' });
            }

            // Check if the user already exists
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Create a new user with the provided data
            const newUser = new User({ email, password, role });
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Check if the email and password are provided
            if (!email || !password) {
                return res.status(400).json({ message: 'Email and password are required' });
            }

            // Find the user by email
            const user = await User.findOne({ email });

            // If user not found
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Compare the provided password with the password stored in the database (without hashing)
            if (password !== user.password) {
                console.log('Passwords do not match');
                return res.status(401).json({ message: 'Invalid password' });
            }

            // Password is correct, send a success message or token
            res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
};
