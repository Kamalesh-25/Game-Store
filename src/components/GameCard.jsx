// src/components/GameCard.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import { Card, CardMedia, Typography, Button, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const GameCard = ({ game }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 10px 20px rgba(0, 191, 255, 0.3)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={game.image}
        alt={game.name}
        sx={{
          // THE FIX IS HERE: Reduced height from 300 to 220.
          // This creates a more balanced, rectangular shape for a 3-column layout.
          height: 220,
          objectFit: 'cover',
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          padding: 2,
          opacity: 0,
          transform: 'translateY(100%)',
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
          '.MuiCard-root:hover &': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        }}
      >
        <Typography 
          // Use a slightly smaller variant to match the new card size
          variant="h6" 
          component={Link} 
          to={`/game/${game.id}`}
          sx={{ fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}
        >
          {game.name}
        </Typography>
        <Typography variant="h6" sx={{ my: 1 }}>
          ${game.price.toFixed(2)}
        </Typography>
        <Button 
          variant="contained"
          onClick={() => addToCart(game)}
          startIcon={<AddShoppingCartIcon />}
          fullWidth
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default GameCard;