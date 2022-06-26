import { createSlice } from '@reduxjs/toolkit';

export const skateboarding = createSlice({
  name: 'skateboarding',
  initialState: {
    skateboarding: [],
  },
  reducers: {
    setSkateboarding: (state, action) => {
      state.skateboarding = action.payload;
    },
  },
});

export const { setSkateboarding } = skateboarding.actions;

export default skateboarding.reducer;
