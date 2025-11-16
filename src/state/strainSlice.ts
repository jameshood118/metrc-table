// src/state/counterSlice.ts
import { createSlice} from '@reduxjs/toolkit';
import localData from '../data/strains.json';
import type { Strain } from '../types/strains.ts';




interface StrainState {
  items: Strain[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: StrainState = {
  items: localData as Strain[],
  status: 'idle',
  error: null,
};

// --- Slice Definition ---
export const strainSlice = createSlice({
  name: 'strain',
  initialState,
  reducers: {
    // Simple synchronous reducer to load the data
    loadStrains: (state) => {
      state.items = localData as Strain[];
      state.status = 'succeeded';
    },
    filterArchivedStrains: (state) => {
      state.items = state.items.filter((strain) => !strain.IsArchived);
    },
    handleArchiveStrain: (state, action) => {
      const idToArchive = action.payload;


      const updatedItems = state.items.map((strain) => {
  // Check if the current strain matches the ID to archive
        if (strain.Id === idToArchive) {
        console.log(`Archived strain with ID: ${idToArchive}`);
          return {
            ...strain, 
            IsArchived: true, 
          };
        }
        return strain;
      });
      // Update the state with the modified items array
        state.items = updatedItems;


    },
    handleUnArchiveStrain: (state, action) => {
      const idToArchive = action.payload;

      const updatedItems = state.items.map((strain) => {
        // Check if the current strain matches the ID to unarchive
        if (strain.Id === idToArchive) {
          return {
            ...strain,
            IsArchived: false, 
          };
        }
        
        return strain;
      });
      // Update the state with the modified items array
      state.items = updatedItems;

      console.log(`UnArchived strain with ID: ${idToArchive}`);
    }
  },

});

export const { loadStrains, filterArchivedStrains, handleArchiveStrain, handleUnArchiveStrain } = strainSlice.actions;

export default strainSlice.reducer;