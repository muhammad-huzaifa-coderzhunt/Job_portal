// Import the jsonwebtoken library
const jwt = require('jsonwebtoken');

// Middleware function to protect routes
module.exports = function (req, res, next) {
  // Get the token from the Authorization header
  const token = req.header('Authorization')?.split(' ')[1] || null;

  // Check if a token is not present
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify the token
  try {
    // Decode the token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded.user;
    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Respond with an error if the token is not valid
    res.status(401).json({ msg: 'Token is not valid' });
  }
};