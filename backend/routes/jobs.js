// Import necessary packages and controllers
const express = require('express');
const {
  getJobs,
  createJob
} = require('../controllers/jobs');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');

// Create an Express router
const router = express.Router();

// Define routes for handling jobs
router
  .route('/')
  // Get all jobs (publicly accessible)
  .get(getJobs)
  // Create a new job (accessible only to authenticated admins)
  .post(auth, authorize('admin'), createJob);

// Export the router
module.exports = router;