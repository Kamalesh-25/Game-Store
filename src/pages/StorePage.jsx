import React, { useState } from 'react'; 
import { games } from '../data/games.js';
import GameList from '../components/GameList.jsx';
import { Typography, TextField, Box } from '@mui/material'; 
import SearchIcon from '@mui/icons-material/Search';

const StorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
          onChange={(e) => setSearchQuery(e.target.value)} 
          sx={{ width: '300px' }}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
        />
      </Box>
      <GameList games={filteredGames} /> 
    </>
  );
};

export default StorePage;