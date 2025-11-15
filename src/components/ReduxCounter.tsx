// src/components/ReduxCounter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../state/counterSlice';
import type { RootState, AppDispatch } from '../state/store';
import { Button, Typography, Paper, Grid } from '@mui/material';

const ReduxCounter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Paper elevation={2} sx={{ p: 3, m: 2, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Redux Toolkit Counter
      </Typography>

      <Typography variant="h3" color="primary.main" sx={{ my: 2 }}>
        {count}
      </Typography>
    </Paper>
  );
};

export default ReduxCounter;