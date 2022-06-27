import { createSlice } from '@reduxjs/toolkit';

export const snowDocs = createSlice({
  name: 'snowDocs',
  initialState: {
    snowDocs: [],
  },
  reducers: {
    setSnowDocs: (state, action) => {
      state.snowDocs = action.payload;
    },
  },
});

export const { setSnowDocs } = snowDocs.actions;

export default snowDocs.reducer;
