
// Import the User model
const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Private/Admin
exports.getUsers = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    // Respond with a success status and the fetched users
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (err) {
    // Respond with an error status if something goes wrong
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Private/Admin
exports.getUser = async (req, res, next) => {
  try {
    // Find a single user by their ID
    const user = await User.findById(req.params.id);
    // If the user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }
    // Respond with a success status and the fetched user
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    // Respond with an error status if something goes wrong
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update user profile data
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = async (req, res, next) => {
  try {
    // Find and update a user by their ID with the new data from the request body
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run validators on the update operation
    });
    // If the user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }
    // Respond with a success status and the updated user
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    // Respond with an error status if something goes wrong
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res, next) => {
  try {
    // Find and delete a user by their ID
    const user = await User.findByIdAndDelete(req.params.id);
    // If the user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }
    // Respond with a success status and an empty data object
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    // Respond with an error status if something goes wrong
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete multiple users
// @route   DELETE /api/v1/users
// @access  Private/Admin
exports.deleteUsers = async (req, res, next) => {
  try {
    // Find and delete multiple users by their IDs
    await User.deleteMany({ _id: { $in: req.body.ids } });
    // Respond with a success status
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    // Respond with an error status if something goes wrong
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update user status by ID
// @route   PUT /api/v1/users/:id/status
// @access  Private/Admin
exports.updateUserStatus = async (req, res, next) => {
  try {
    // Find and update a user's status by their ID
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isSuspended: req.body.isSuspended },
      {
        new: true,
        runValidators: true,
      }
    );
    // If the user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }
    // Respond with a success status and the updated user
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    // Respond with an error status if something goes wrong
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update status of multiple users
// @route   PUT /api/v1/users/status
// @access  Private/Admin
exports.updateUsersStatus = async (req, res, next) => {
  try {
    // Find and update the status of multiple users by their IDs
    await User.updateMany(
      { _id: { $in: req.body.ids } },
      { isSuspended: req.body.isSuspended }
    );
    // Respond with a success status
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    // Respond with an error status if something goes wrong
    res.status(400).json({ success: false, error: err.message });
  }
};
