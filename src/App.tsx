// src/App.tsx
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, GridReadyEvent, RowSelectedEvent } from 'ag-grid-community';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { loadStrains, filterArchivedStrains, handleArchiveStrain, handleUnArchiveStrain } from './state/strainSlice'; // Use your custom hooks
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';
import type {Strain} from './types/strains';
const App = () => {
const dispatch = useAppDispatch();
const { items, status } = useAppSelector((state) => state.strain);
const [showArchived, setShowArchived] = useState<boolean>(false);
const [open, setOpen] = useState(false);
const [selectedRow, setSelectedRow] = useState<Strain | null>(null);

useEffect(() => {
    if (showArchived === true) {
    dispatch(loadStrains()); 
    } else {
    dispatch(filterArchivedStrains());
    }

  }, [dispatch, status, showArchived]);

  const handleFilter = () => {
    setShowArchived(true)
  };

  const handleReset = () => {
    setShowArchived(false)
  }

const onGridReady = useCallback((params: GridReadyEvent) => {
  params.api.sizeColumnsToFit();
}, []);

const onRowSelected = useCallback((event: RowSelectedEvent) => {
    // 1. Check if the row was selected (not deselected) and has data
    if (event.node.isSelected() && event.node.data) {
        // 2. Data is already typed correctly
        setSelectedRow(event.node.data); 
        // 3. Open the Material UI Dialog
        setOpen(true);
    }
}, []);

const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
};

const handleArchive = ()=> {
  const id = selectedRow?.Id;
  if (id !== undefined) {
    dispatch(handleArchiveStrain(id));
    setOpen(false);
    setSelectedRow(null);
  }
}
const handleUnArchive = ()=> {
  const id = selectedRow?.Id;
  if (id !== undefined) {
    dispatch(handleUnArchiveStrain(id));
    setOpen(false);
    setSelectedRow(null);
  }
}

interface strainDialogProps {
  open: boolean;
  selectedStrain: Strain | null;
  onClose: (value: string) => void;
}

const ModalView = (props: strainDialogProps) => {

  return (
    <Dialog
    open={open}
    onClose={handleClose}
    maxWidth="sm"
    fullWidth
>

    <DialogTitle sx={{paddingBottom: 1}}>Details for: {props.selectedStrain?.Name}</DialogTitle>
    <DialogContent>
      <Grid container spacing={2} sx={{paddingTop: 2}}>
          <Grid>
            <TextField id="outlined-basic" label="Testing" variant="outlined" value={props.selectedStrain?.Testing} />
          </Grid>
          <Grid>
            <TextField id="outlined-basic" label="THC" variant="outlined" value={props.selectedStrain?.THC} />
          </Grid>
          <Grid>
            <TextField id="outlined-basic" label="CBD" variant="outlined" value={props.selectedStrain?.CBD} />
          </Grid>
          <Grid>
            <TextField id="outlined-basic" label="Genetics" variant="outlined" value={props.selectedStrain?.Genetics} />
          </Grid>
          <Grid>
            <TextField id="outlined-basic" label="Units" variant="outlined" value={props.selectedStrain?.Units} />
          </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      {props.selectedStrain?.IsArchived ? <Button onClick={handleUnArchive}>Unarchive</Button> : <Button onClick={handleArchive}>Archive</Button>}
        <Button onClick={handleClose}>Close</Button>
    </DialogActions>
</Dialog>
  )
}

  // Define Columns (colDefs)
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
          <h1>Metrc Strain Table</h1>
          <Button variant="contained" onClick={handleFilter} sx={{m:1}}>Show Archived Strains</Button>
          <Button variant="contained" onClick={handleReset} sx={{m:1}}>Show All Strains</Button>
          <div className="ag-theme-alpine" style={gridStyles}>
            <ModalView selectedStrain={selectedRow} open={open} onClose={handleClose}/>
            <AgGridReact
              rowData={items}
              columnDefs={colDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={20}
              onGridReady={onGridReady}
              rowSelection={'single'}
              onRowSelected={onRowSelected} 
            />
          </div>

        </Box>
  );
};

export default App;
