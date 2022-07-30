import { createSlice } from '@reduxjs/toolkit';

export const mtb = createSlice({
  name: 'mtb',
  initialState: {
    mtb: [],
  },
  reducers: {
    setMtb: (state, action) => {
      state.mtb = action.payload;
    },
  },
});

export const { setMtb } = mtb.actions;

export default mtb.reducer;
