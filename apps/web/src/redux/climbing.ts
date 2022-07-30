import { createSlice } from '@reduxjs/toolkit';

export const climbing = createSlice({
  name: 'climbing',
  initialState: {
    climbing: [],
  },
  reducers: {
    setClimbing: (state, action) => {
      state.climbing = action.payload;
    },
  },
});

export const { setClimbing } = climbing.actions;

export default climbing.reducer;
