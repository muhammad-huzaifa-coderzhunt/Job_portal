// Import necessary packages from React
import React from 'react';
import { Navigate } from 'react-router-dom';

// A component to protect routes that require authentication
const PrivateRoute = ({ children, adminOnly }) => {
  // Get the token and user role from local storage
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  // If there is no token, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If the route is for admins only and the user is not an admin, redirect to the dashboard
  if (adminOnly && userRole !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  // If the user is authenticated and has the correct role, render the children components
  return children;
};

// Export the PrivateRoute component
export default PrivateRoute;