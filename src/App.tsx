// src/App.tsx
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, GridReadyEvent } from 'ag-grid-community';
import { useAppDispatch, useAppSelector } from './hooks/hooks'; // Use your custom hooks
import { fetchItems } from './state/strainSlice';


const App = () => {

const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.strain);

  useEffect(() => {
    // Dispatch the thunk to load the data when the component mounts
    if (status === 'idle') {
      dispatch(fetchItems());
    }
  }, [dispatch, status]);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    params.api.sizeColumnsToFit();
  }, []);

    // 1. Define Data (rowData)
  const [rowData] = useState([
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },
    {Name: "Golden Goat", Testing: "TestPassed", THC: 0.17, CBD: 0.30, Genetics: "Hybrid", Units: "119" },

    // ... more data
  ]);

  // 2. Define Columns (colDefs)
  const [colDefs] = useState<ColDef[]>([
    { field: 'Name' },
    { field: 'Testing' },
    { field: 'THC' },
    { field: 'CBD' },
    { field: 'Genetics' },
    { field: 'Units' },
  ]);

  const defaultColDef = useMemo<ColDef>(
    () => ({
      resizable: true,
      flex: 1,
      minWidth: 100,
      cellStyle: { 
        textAlign: 'center',
        display: 'flex', 
        alignItems: 'center',
        borderRight: '1px solid #CCC',
      },
      headerClass: 'center-header-text',
      sortable: true,
      filter: true,
    }),
    []
  );
 
  const gridStyles = {
    height: '65vh', width: "100%",
    '.agThemeAlpine': {
      '--ag-cell-horizontal-border': 'var(--ag-row-border-width) var(--ag-row-border-style) var(--ag-row-border-color)--ag-header-column-separator-display: block',
    },
  }

  return (
        <Box
          sx={{
            // Padding Control
            pt: 0, // No padding on the top
            pb: 0, // No padding on the bottom
            pl: { xs: 1, sm: 1, md: 2, lg: 2 }, // **Left Padding:** Adjusts responsively
            pr: { xs: 1, sm: 1, md: 2, lg: 2 }, // **Right Padding:** Matches the left padding
            
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
          <div className="ag-theme-alpine" style={gridStyles}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={20}
              onGridReady={onGridReady}
            />
          </div>

        </Box>
  );
};

export default App;