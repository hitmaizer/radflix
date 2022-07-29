import { createSlice } from '@reduxjs/toolkit';

export const oldSkool = createSlice({
  name: 'oldSkool',
  initialState: {
    oldSkool: [],
  },
  reducers: {
    setOldSkool: (state, action) => {
      state.oldSkool = action.payload;
    },
  },
});

export const { setOldSkool } = oldSkool.actions;

export default oldSkool.reducer;
