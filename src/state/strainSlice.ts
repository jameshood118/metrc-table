// src/state/counterSlice.ts
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type { PayloadAction} from '@reduxjs/toolkit';
import type { Strain } from '../types/strains.ts';
import { fetchItemsFromApi } from '../api/strainApi.ts';



interface StrainState {
  items: Strain[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: StrainState = {
  items: [],
  status: 'idle',
  error: null,
};

// --- Async Thunk (The Action Creator) ---
export const fetchItems = createAsyncThunk<Strain[], void>(
  'data/fetchItems', // Action type prefix
  async () => {
    const data = await fetchItemsFromApi();
    return data; // This result becomes the action.payload on success
  }
);

// --- Slice Definition ---
export const strainSlice = createSlice({
  name: 'strain',
  initialState,
  reducers: {},
  // Use extraReducers to handle the promise lifecycle of the thunk
  extraReducers: (builder) => {
    builder
      // 1. PENDING: Set loading status
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      // 2. FULFILLED: Set the data and success status
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Strain[]>) => {
        state.status = 'succeeded';
        state.items = action.payload; // **This sets the value from the fetch**
      })
      // 3. REJECTED: Set error status and message
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch items';
      });
  },
});

export default strainSlice.reducer;