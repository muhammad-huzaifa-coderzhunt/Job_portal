// Import necessary packages from React and Material-UI
import React from 'react';
import { Container, Typography } from '@mui/material';

// The component for the user's dashboard
const Dashboard = () => {
  // Get the user's role from local storage
  const userRole = localStorage.getItem('userRole');

  return (
    <Container>
      {/* Title of the dashboard */}
      <Typography variant="h4" sx={{ mt: 4 }}>
        Dashboard
      </Typography>
      {/* Welcome message */}
      <Typography>Welcome to your dashboard.</Typography>
      {/* Display the user's role if it exists */}
      {userRole && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Your role: {userRole}
        </Typography>
      )}
    </Container>
  );
};

// Export the Dashboard component
export default Dashboard;