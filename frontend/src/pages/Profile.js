// Import necessary packages from React and Material-UI
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';
import axios from 'axios';

// The component for the user's profile page
const Profile = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Fetch the user's profile data when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        // Send a GET request to the /auth/me endpoint to get the user's data
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/auth/me`,
          config
        );
        // Set the form data with the fetched user data
        setFormData({
          name: res.data.name,
          email: res.data.email,
        });
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchProfile();
  }, []);

  const { name, email } = formData;

  // Function to handle form input changes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implement the logic to update the user's profile
      console.log('Update profile data:', formData);
      alert('Profile updated successfully (simulated)');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          User Profile
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          {/* Name input field */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={onChange}
          />
          {/* Email input field (disabled) */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={onChange}
            disabled
          />
          {/* Submit button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

// Export the Profile component
export default Profile;