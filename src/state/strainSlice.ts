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

// Update the items array by setting IsArchived to true for the matching strain
        console.log(`Archived strain with ID: ${idToArchive}`);


    },
    handleUnArchiveStrain: (state, action) => {
      const idToArchive = action.payload;

// Update the items array by setting IsArchived to false for the matching strain

      console.log(`UnArchived strain with ID: ${idToArchive}`);
    }
  },

});

export const { loadStrains, filterArchivedStrains, handleArchiveStrain, handleUnArchiveStrain } = strainSlice.actions;

export default strainSlice.reducer;