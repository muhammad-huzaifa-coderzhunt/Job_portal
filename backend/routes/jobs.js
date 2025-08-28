
const express = require('express');
const {
  getJobs,
  createJob
} = require('../controllers/jobs');
const auth = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getJobs)
  .post(auth, createJob);

module.exports = router;
