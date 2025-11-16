// src/state/counterSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { strain, StrainDataState } from '../models/strains.ts';


const initialState: strain[] = [{
  Id: 1,
    "Name": "AK-47",
    "Testing": "TestPassed",
    "THC": 0.17,
    "CBD": 0.23,
    "Genetics": "Hybrid",
    "Units": "126",
    "IsArchived": false
  }];

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setData: (state) => {
      state = initialState;
    },
    decrement: (state) => {
      // state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload;
    },
  },
});

export const { setData, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;