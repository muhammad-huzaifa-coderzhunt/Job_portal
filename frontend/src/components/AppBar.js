// Import necessary packages from React and Material-UI
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

// The component for the application's app bar
export default function ButtonAppBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Menu icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* Title of the application */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Portal
          </Typography>
          {/* Conditional rendering based on authentication status */}
          {token ? (
            <>
              {/* Conditionally render User Management button for admin users */}
              {userRole === 'admin' && (
                <Button color="inherit" onClick={() => navigate('/admin/users')}>
                  User Management
                </Button>
              )}
              {/* Profile button */}
              <Button color="inherit" onClick={() => navigate('/profile')}>
                Profile
              </Button>
              {/* Logout button */}
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* Login button */}
              <Button color="inherit" onClick={() => navigate('/login')}>
                Login
              </Button>
              {/* Register button */}
              <Button color="inherit" onClick={() => navigate('/register')}>
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}