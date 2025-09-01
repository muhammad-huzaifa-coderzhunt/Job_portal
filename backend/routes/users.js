// Import necessary packages and controllers
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');

// Define a route for getting all users (accessible only to authenticated admins)
router.route('/').get(auth, authorize('admin'), getUsers);

// Define routes for handling a single user by their ID
router
  .route('/:id')
  // Get a single user (accessible only to authenticated admins)
  .get(auth, authorize('admin'), getUser)
  // Update a user (accessible only to authenticated admins)
  .put(auth, authorize('admin'), updateUser)
  // Delete a user (accessible only to authenticated admins)
  .delete(auth, authorize('admin'), deleteUser);

// Export the router
module.exports = router;