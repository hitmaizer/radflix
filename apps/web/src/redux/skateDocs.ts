import { createSlice } from '@reduxjs/toolkit';

export const skateDocs = createSlice({
  name: 'skateDocs',
  initialState: {
    skateDocs: [],
  },
  reducers: {
    setSkateDocs: (state, action) => {
      state.skateDocs = action.payload;
    },
  },
});

export const { setSkateDocs } = skateDocs.actions;

export default skateDocs.reducer;
