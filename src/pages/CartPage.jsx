import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom>Your Cart is Empty</Typography>
        <Button variant="contained" component={Link} to="/store">
          Go Shopping
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>Your Cart</Typography>
      <Grid container spacing={4}>
        <Grid xs={12} md={8}>
          {cartItems.map(item => (
            <Paper key={item.id} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{ width: 100, height: 75, mr: 2, borderRadius: 1 }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography color="text.secondary">
                  {item.quantity} x Rs.{item.price.toFixed(2)}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ mr: 2 }}>
                ${(item.price * item.quantity).toFixed(2)}
              </Typography>
              <IconButton onClick={() => removeFromCart(item.id)} color="error">
                <DeleteIcon />
              </IconButton>
            </Paper>
          ))}
        </Grid>
        <Grid xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>Order Summary</Typography>
            <Typography variant="h4">Total: Rs.{totalPrice.toFixed(2)}</Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Proceed to Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CartPage;