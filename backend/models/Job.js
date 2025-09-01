// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for the Job model
const JobSchema = new mongoose.Schema({
  // Title of the job
  title: {
    type: String,
    required: [true, 'Please add a title'], // Title is required
    trim: true, // Trim whitespace from the title
    maxlength: [50, 'Title can not be more than 50 characters'] // Maximum length for the title
  },
  // Description of the job
  description: {
    type: String,
    required: [true, 'Please add a description'], // Description is required
    maxlength: [500, 'Description can not be more than 500 characters'] // Maximum length for the description
  },
  // Company offering the job
  company: {
    type: String,
    required: [true, 'Please add a company'] // Company is required
  },
  // Location of the job
  location: {
    type: String,
    required: [true, 'Please add a location'] // Location is required
  },
  // Date when the job was created
  createdAt: {
    type: Date,
    default: Date.now // Default value is the current date and time
  }
});

// Export the Job model
module.exports = mongoose.model('Job', JobSchema);