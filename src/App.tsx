// src/App.tsx
import React from 'react';
import DataFetcher from './components/DataFetcher';
import ReduxCounter from './components/ReduxCounter';
import { Box, Typography } from '@mui/material';

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
          {/* Content inside the central div */}
          <Typography variant="h4" component="h1" gutterBottom>
            Accessible Content Area
          </Typography>
          <Typography>
            This central box has **equal padding on the left and right** (which adjusts
            responsively for different screen sizes) and **no vertical padding** (pt: 0, pb: 0)
            relative to the outer container. The **light box** against the **dark background**
            ensures excellent contrast!
          </Typography>
          <DataFetcher />
          <ReduxCounter />
        </Box>
  );
};

export default App;