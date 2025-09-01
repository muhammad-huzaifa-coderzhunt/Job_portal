// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for the User model
const UserSchema = new mongoose.Schema({
  // Name of the user
  name: {
    type: String,
    required: true, // Name is required
  },
  // Email of the user
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Email must be unique
  },
  // Password of the user
  password: {
    type: String,
    required: true, // Password is required
  },
  // Role of the user
  role: {
    type: String,
    enum: ['user', 'admin'], // Role can only be 'user' or 'admin'
    default: 'user', // Default role is 'user'
  },
  // Suspension status of the user
  isSuspended: { 
    type: Boolean,
    default: false, // Default suspension status is false
  },
  // Date when the user was created
  date: {
    type: Date,
    default: Date.now, // Default value is the current date and time
  },
});

// Export the User model
module.exports = User = mongoose.model('user', UserSchema);