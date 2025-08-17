// src/pages/StorePage.jsx
import React, { useState } from 'react'; // <-- Import useState
import { games } from '../data/games.js';
import GameList from '../components/GameList.jsx';
import { Typography, TextField, Box } from '@mui/material'; // <-- Import TextField and Box
import SearchIcon from '@mui/icons-material/Search';

const StorePage = () => {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter games based on the search query (case-insensitive)
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1">
          Store
        </Typography>
        <TextField
          variant="outlined"
          label="Search Games"
          onChange={(e) => setSearchQuery(e.target.value)} // Update state on change
          sx={{ width: '300px' }}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
        />
      </Box>
      <GameList games={filteredGames} /> {/* Pass the filtered list */}
    </>
  );
};

export default StorePage;