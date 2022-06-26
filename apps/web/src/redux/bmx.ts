import { createSlice } from '@reduxjs/toolkit';

export const bmx = createSlice({
  name: 'bmx',
  initialState: {
    bmx: [],
  },
  reducers: {
    setBmx: (state, action) => {
      state.bmx = action.payload;
    },
  },
});

export const { setBmx } = bmx.actions;

export default bmx.reducer;
