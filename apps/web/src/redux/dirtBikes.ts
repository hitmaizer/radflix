import { createSlice } from '@reduxjs/toolkit';

export const dirtBikes = createSlice({
  name: 'dirtBikes',
  initialState: {
    dirtBikes: [],
  },
  reducers: {
    setDirtBikes: (state, action) => {
      state.dirtBikes = action.payload;
    },
  },
});

export const { setDirtBikes } = dirtBikes.actions;

export default dirtBikes.reducer;
