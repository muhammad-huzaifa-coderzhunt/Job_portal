import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const auth = { token: localStorage.getItem('token') }; // Placeholder for auth state
  return auth.token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
