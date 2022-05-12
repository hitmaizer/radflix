import { createSlice } from '@reduxjs/toolkit';

export const error = createSlice({
  name: 'error',
  initialState: {
    error: '',
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = error.actions;

export default error.reducer;
