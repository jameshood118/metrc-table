// src/app/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../state/store';

// Custom hook for dispatch, ensuring thunks are correctly typed
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook for selector, ensuring state access is fully typed
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;