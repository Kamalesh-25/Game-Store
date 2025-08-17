// src/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bfff', // Deep Sky Blue - a vibrant accent
    },
    background: {
      default: '#0a1929', // A deep, rich navy blue
      paper: '#132f4c',   // A slightly lighter blue for cards and surfaces
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
  },
});