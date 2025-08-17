import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Checkout
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for shopping with us!
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          This is a demonstration page. In a real application, this is where you would enter your payment and shipping details.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button 
            variant="contained" 
            component={Link} 
            to="/store"
          >
            Continue Shopping
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;