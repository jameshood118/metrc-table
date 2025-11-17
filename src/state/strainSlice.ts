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

      //redux shouldnt directly mutate state, we need to create a new array with the updated values
      //however the proper method would be to use createAsyncThunk to handle this with an 
      // api call to update the backend then pull data from backend again to update the store
      const idToArchive = action.payload;
      const archived = state.items.find((strain) => strain.Id === idToArchive);
      //TODO Update the items array by setting IsArchived to true for the matching strain
      console.log(`Archived strain with ID: ${idToArchive} - ` + archived);


    },
    handleUnArchiveStrain: (state, action) => {
      //redux shouldnt directly mutate state, we need to create a new array with the updated values
      //however the proper method would be to use createAsyncThunk to handle this with an 
      // api call to update the backend then pull data from backend again to update the store
      const idToArchive = action.payload;
      const unarchived = state.items.find((strain) => strain.Id === idToArchive);
      //TODO Update the items array by setting IsArchived to false for the matching strain
      console.log(`UnArchived strain with ID: ${idToArchive} - ` + unarchived);
    }
  },

});

export const { loadStrains, filterArchivedStrains, handleArchiveStrain, handleUnArchiveStrain } = strainSlice.actions;

export default strainSlice.reducer;