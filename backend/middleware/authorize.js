// Middleware function to authorize users based on their roles
module.exports = (...roles) => {
  return (req, res, next) => {
    // Check if the user's role is included in the allowed roles
    if (!roles.includes(req.user.role)) {
      // If not authorized, respond with a 403 Forbidden status
      return res.status(403).json({ msg: `User role ${req.user.role} is not authorized to access this route` });
    }
    // If authorized, proceed to the next middleware or route handler
    next();
  };
};