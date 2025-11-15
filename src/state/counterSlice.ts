// src/state/counterSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface strain {
    Name: string,
    Testing: string,
    THC: number,
    CBD: number,
    Genetics: string,
    Units: string
}

const initialState: strain =   {
    "Name": "AK-47",
    "Testing": "TestPassed",
    "THC": 0.17,
    "CBD": 0.23,
    "Genetics": "Hybrid",
    "Units": "126"
  };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // state.value += 1;
    },
    decrement: (state) => {
      // state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;