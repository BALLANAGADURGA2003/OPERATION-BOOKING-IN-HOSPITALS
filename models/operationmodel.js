const mongoose = require('mongoose');

// Define the schema for the operation
const operationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    // Add more fields as needed
});

// Create and export the Operation model
const Operation = mongoose.model('operationmodel', operationSchema);
module.exports = Operation;
