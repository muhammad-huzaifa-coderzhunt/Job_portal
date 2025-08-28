import React from 'react';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  const userRole = localStorage.getItem('userRole'); // Get user role from local storage

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Dashboard
      </Typography>
      <Typography>Welcome to your dashboard.</Typography>
      {userRole && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Your role: {userRole}
        </Typography>
      )}
    </Container>
  );
};

export default Dashboard;
