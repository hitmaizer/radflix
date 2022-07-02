import { createSlice } from '@reduxjs/toolkit';

export const open = createSlice({
  name: 'open',
  initialState: {
    open: false,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setIsOpen } = open.actions;

export default open.reducer;
