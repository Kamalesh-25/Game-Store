// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import GameDetailPage from './pages/GameDetailPage';
import CartPage from './pages/CartPage';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Container 
        component="main" 
        maxWidth={false} 
        sx={{ 
          mt: 4, 
          mb: 4,
          // THE FINAL FIX IS HERE:
          // We are reducing the padding to make the side gaps smaller.
          // xs: 1 = 8px padding on mobile
          // sm: 2 = 16px padding on tablets and desktops (half of what it was before)
          px: { xs: 1, sm: 2 } 
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/game/:id" element={<GameDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;