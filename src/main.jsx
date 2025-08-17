import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles'; 
import { theme } from './theme';

const globalScrollbarStyles = {
  '*::-webkit-scrollbar': {
    width: '8px',
  },
  '*::-webkit-scrollbar-track': {
    background: '#0a1929', 
  },
  '*::-webkit-scrollbar-thumb': {
    background: '#132f4c', 
    borderRadius: '4px',
  },
  '*::-webkit-scrollbar-thumb:hover': {
    background: '#00bfff', 
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#333',
                color: '#fff',
              },
            }}
          />
          <CssBaseline />
          <GlobalStyles styles={globalScrollbarStyles} />
          <App />
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);