import React from 'react';
import GameCard from './GameCard.jsx';
import { Box } from '@mui/material'; 

const GameList = ({ games }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: 3, 
      }}
    >
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </Box>
  );
};

export default GameList;