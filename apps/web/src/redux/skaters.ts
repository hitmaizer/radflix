import { createSlice } from '@reduxjs/toolkit';

export const skaters = createSlice({
  name: 'skaters',
  initialState: {
    skaters: [],
  },
  reducers: {
    setSkaters: (state, action) => {
      state.skaters = action.payload;
    },
  },
});

export const { setSkaters } = skaters.actions;

export default skaters.reducer;
