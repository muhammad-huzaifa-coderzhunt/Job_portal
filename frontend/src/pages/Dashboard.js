import React from 'react';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Dashboard
      </Typography>
      <Typography>Welcome to your dashboard.</Typography>
    </Container>
  );
};

export default Dashboard;
