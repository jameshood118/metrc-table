// src/state/store.ts
import { configureStore } from '@reduxjs/toolkit';
import strainReducer from './strainSlice';

export const store = configureStore({
  reducer: {
    strain: strainReducer,
  },
});

// TypeScript types for the entire app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;