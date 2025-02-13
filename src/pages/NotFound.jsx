
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Box, Typography, Link } from '@mui/material';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.100'
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>404</Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Oops! Page not found
        </Typography>
        <Link href="/" color="primary" underline="hover">
          Return to Home
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
