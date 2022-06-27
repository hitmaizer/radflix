import { createSlice } from '@reduxjs/toolkit';

export const bmxDocs = createSlice({
  name: 'bmxDocs',
  initialState: {
    bmxDocs: [],
  },
  reducers: {
    setBmxDocs: (state, action) => {
      state.bmxDocs = action.payload;
    },
  },
});

export const { setBmxDocs } = bmxDocs.actions;

export default bmxDocs.reducer;
