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

      // map returns a *new* array.
      const updatedItems = state.items.map((strain) => {
        // If the ID matches, return a new object with the update
        if (strain.Id === idToArchive) {
          return {
            ...strain, // Copy all existing properties
            IsArchived: true, // Apply the specific update
          };
        }
        // Otherwise, return the original, unchanged object
        return strain;
      });
      state.items = updatedItems;

      console.log(`Archived strain with ID: ${idToArchive}`);

    },
    handleUnArchiveStrain: (state, action) => {
      const idToArchive = action.payload;

      // map returns a *new* array.
      const updatedItems = state.items.map((strain) => {
        // If the ID matches, return a new object with the update
        if (strain.Id === idToArchive) {
          return {
            ...strain, // Copy all existing properties
            IsArchived: false, // Apply the specific update
          };
        }
        // Otherwise, return the original, unchanged object
        return strain;
      });
      state.items = updatedItems;

      console.log(`UnArchived strain with ID: ${idToArchive}`);
    }
  },
  // Use extraReducers to handle the promise lifecycle of the thunk
  // extraReducers: (builder) => { }
});

export const { loadStrains, filterArchivedStrains, handleArchiveStrain, handleUnArchiveStrain } = strainSlice.actions;

export default strainSlice.reducer;