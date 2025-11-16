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
    // 💡 NEW REDUCER: Filters out items where isArchived is true
    filterArchivedStrains: (state) => {
      // Filter the data from the immutable 'allItems' source and update 'items'
      state.items = state.items.filter((strain) => !strain.IsArchived);
    },
    handleArchiveStrain: (state, action) => {
      const idToArchive = action.payload;

      console.log(state)
      console.log(idToArchive)

      state.items = state.items.map((strain) =>
        strain.Id === idToArchive ? { ...strain, IsArchived: true } : strain
      );
    },
    handleUnArchiveStrain: (state, action) => {
      const idToArchive = action.payload;

      console.log(state)
      console.log(idToArchive)
      state.items = state.items.map((strain) =>
        strain.Id === idToArchive ? { ...strain, IsArchived: false } : strain
      );
    }
  },
  // Use extraReducers to handle the promise lifecycle of the thunk
  // extraReducers: (builder) => { }
});

export const { loadStrains, filterArchivedStrains, handleArchiveStrain, handleUnArchiveStrain } = strainSlice.actions;

export default strainSlice.reducer;