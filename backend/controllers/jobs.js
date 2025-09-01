// Import the Job model
const Job = require('../models/Job');

// @desc      Get all jobs
// @route     GET /api/v1/jobs
// @access    Public
exports.getJobs = async (req, res, next) => {
  try {
    // Fetch all jobs from the database
    const jobs = await Job.find();

    // Respond with a success status and the fetched jobs
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (err) {
    // Respond with an error status if something goes wrong
    res.status(400).json({ success: false });
  }
};

// @desc      Create new job
// @route     POST /api/v1/jobs
// @access    Private
exports.createJob = async (req, res, next) => {
  try {
    // Create a new job with the data from the request body
    const job = await Job.create(req.body);

    // Respond with a success status and the created job
    res.status(201).json({
      success: true,
      data: job
    });
  } catch (err) {
    // Respond with an error status if something goes wrong
    res.status(400).json({ success: false });
  }
};