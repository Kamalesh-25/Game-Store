import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../data/games';
import { CartContext } from '../context/CartContext.jsx';
import { Box, Typography, Button, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const GameDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const game = games.find(g => g.id === parseInt(id));

  if (!game) {
    return <Typography variant="h4">Game not found!</Typography>;
  }

  return (
    <Grid container spacing={4}>
      <Grid xs={12} md={6}>
        <Box
          component="img"
          sx={{ width: '100%', borderRadius: 2 }}
          src={game.image}
          alt={game.name}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Typography variant="h3" component="h1" gutterBottom>{game.name}</Typography>
        <Typography variant="body1" paragraph>{game.description}</Typography>
        <Typography variant="h4" gutterBottom>Rs.{game.price.toFixed(2)}</Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => addToCart(game)}
        >
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default GameDetailPage;