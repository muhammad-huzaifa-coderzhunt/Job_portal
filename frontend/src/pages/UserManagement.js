// Import necessary packages from React and Material-UI
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import axios from 'axios';

// The component for managing users
const UserManagement = () => {
  // State to hold the list of users
  const [users, setUsers] = useState([]);

  // Fetch the list of users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        // Send a GET request to the /users endpoint to get the list of users
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/users`,
          config
        );
        // Set the users state with the fetched data
        setUsers(res.data.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchUsers();
  }, []);

  // Function to handle the deletion of a user
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };
      // Send a DELETE request to the /users/:id endpoint to delete the user
      await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`, config);
      // Remove the deleted user from the users state
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  // Function to handle toggling the suspension status of a user
  const handleToggleSuspension = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'application/json',
        },
      };
      // Send a PUT request to the /users/:id endpoint to update the user's suspension status
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${id}`,
        { isSuspended: !currentStatus },
        config
      );
      // Update the users state with the updated user data
      setUsers(
        users.map((user) => (user._id === id ? res.data.data : user))
      );
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        User Management
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.isSuspended ? 'Suspended' : 'Active'}</TableCell>
                <TableCell align="right">
                  {/* TODO: Implement the edit functionality */}
                  <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  {/* Button to delete a user */}
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(user._id)}
                    sx={{ mr: 1 }}
                  >
                    Delete
                  </Button>
                  {/* Button to toggle the suspension status of a user */}
                  <Button
                    variant="contained"
                    color={user.isSuspended ? 'success' : 'warning'}
                    size="small"
                    onClick={() => handleToggleSuspension(user._id, user.isSuspended)}
                  >
                    {user.isSuspended ? 'Activate' : 'Suspend'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

// Export the UserManagement component
export default UserManagement;