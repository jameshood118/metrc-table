// src/App.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';

const App = () => {

    // 1. Define Data (rowData)
  const [rowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950 },
    // ... more data
  ]);

  // 2. Define Columns (colDefs)
  const [colDefs] = useState<ColDef[]>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);

  
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
          // Set a height/width and apply the theme class
          <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
            />
          </div>

        </Box>
  );
};

export default App;