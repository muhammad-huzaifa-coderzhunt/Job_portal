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

router.route('/').get(auth, authorize('admin'), getUsers);
router
  .route('/:id')
  .get(auth, authorize('admin'), getUser)
  .put(auth, authorize('admin'), updateUser)
  .delete(auth, authorize('admin'), deleteUser);

module.exports = router;
