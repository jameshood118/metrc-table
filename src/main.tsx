// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './fontawesome.ts'; // FA Config

import { ThemeProvider } from '@mui/material/styles';
import customTheme from './theme.ts'; // MUI Theme
import { Container} from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './state/store.ts'; // Redux Store

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* REDUX PROVIDER WRAPS ALL */}
    <Provider store={store}>
      {/* THEME PROVIDER WRAPS APP */}
      <ThemeProvider theme={customTheme}>
        {/* 1. Outer Container for Responsiveness */}
      {/* The Container component centers the content horizontally and sets max-width based on screen size (default MUI behavior). 
         We set the background color here to the main page background color. */}
      <Container
        maxWidth="xl" // Use the full width for the outer container on large screens
        sx={{
          bgcolor: 'background.default', // Use the dark background color
          minHeight: '100vh', // Ensures the background covers the whole viewport
          // No top/bottom padding is applied to this outer Container by default, 
          // allowing the inner Box to control the layout.
        }}
      >
        <App />
      </Container>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);