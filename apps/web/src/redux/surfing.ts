import { createSlice } from '@reduxjs/toolkit';

export const surfing = createSlice({
  name: 'surfing',
  initialState: {
    surfing: [],
  },
  reducers: {
    setSurfing: (state, action) => {
      state.surfing = action.payload;
    },
  },
});

export const { setSurfing } = surfing.actions;

export default surfing.reducer;
