// src/components/GameList.jsx
import React from 'react';
import GameCard from './GameCard.jsx';
import { Box } from '@mui/material'; // We will use Box instead of Grid for simplicity

const GameList = ({ games }) => {
  return (
    // THE FINAL FIX: We use a simple Box component and apply CSS Grid properties directly.
    // This gives us absolute control and bypasses MUI's buggy responsive props.
    <Box
      sx={{
        display: 'grid',
        // This is the magic line:
        // - 'repeat(auto-fill, ...)' tells the grid to create as many columns as can fit.
        // - 'minmax(350px, 1fr)' tells each column to be a minimum of 350px wide,
        //   but they can grow to fill the available space (1fr).
        // This single line handles all responsiveness for phones, tablets, and desktops perfectly.
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: 3, // This is the new way to define spacing between items.
      }}
    >
      {games.map(game => (
        // The GameCard is now the direct child, no extra Grid item wrapper needed.
        <GameCard key={game.id} game={game} />
      ))}
    </Box>
  );
};

export default GameList;