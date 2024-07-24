const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = 'mongodb://localhost:27017/slot_booking'; // Your MongoDB URI here
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
