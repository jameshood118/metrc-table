// src/App.tsx
import React from 'react';
import { Box } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const App = () => {
  return (
        <Box
          sx={{
            // Padding Control
            pt: 0, // No padding on the top
            pb: 0, // No padding on the bottom
            pl: { xs: 2, sm: 4, md: 8, lg: 12 }, // **Left Padding:** Adjusts responsively
            pr: { xs: 2, sm: 4, md: 8, lg: 12 }, // **Right Padding:** Matches the left padding
            
            // Color Control (Ensuring Accessibility)
            bgcolor: 'secondary.main', // Light Cyan background for the content box
            color: 'secondary.contrastText', // Black text for maximum contrast

            // Optional: Basic styling for visibility
            minHeight: '300px',
            py: 4, // Add some vertical padding INSIDE the Box to space out the content
            textAlign: 'center',
            boxShadow: 3, // Add a slight shadow
          }}
        >

        </Box>
  );
};

export default App;