import { createSlice } from '@reduxjs/toolkit';

export const surfDocs = createSlice({
  name: 'surfDocs',
  initialState: {
    surfDocs: [],
  },
  reducers: {
    setSurfDocs: (state, action) => {
      state.surfDocs = action.payload;
    },
  },
});

export const { setSurfDocs } = surfDocs.actions;

export default surfDocs.reducer;
