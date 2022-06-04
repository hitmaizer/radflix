import { createSlice } from '@reduxjs/toolkit';

export const docs = createSlice({
  name: 'docs',
  initialState: {
    docs: [],
  },
  reducers: {
    setDocs: (state, action) => {
      state.docs = action.payload;
    },
  },
});

export const { setDocs } = docs.actions;

export default docs.reducer;
