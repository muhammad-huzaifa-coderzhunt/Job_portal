
const express = require('express');
const {
  getJobs,
  createJob
} = require('../controllers/jobs');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');

const router = express.Router();

router
  .route('/')
  .get(getJobs)
  .post(auth, authorize('admin'), createJob);

module.exports = router;
