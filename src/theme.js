import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffab40',
    },
    background: {
      default: '#000000',
      paper: '#13041dff',
    },
    text: {
      primary: '#ffffffff',
      secondary: '#c5c5c5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    
    h1: { fontFamily: '"Super Shiny", sans-serif', letterSpacing: '0.1rem' },
    h2: { fontFamily: '"Super Shiny", sans-serif', letterSpacing: '0.1rem' },

    h3: { fontFamily: '"ICECREAMY", sans-serif' },
    h4: { fontFamily: '"ICECREAMY", sans-serif' },

    h5: { fontFamily: '"Montserrat", sans-serif', fontWeight: 500 },
    h6: { fontFamily: '"Montserrat", sans-serif', fontWeight: 500 },
  },
});