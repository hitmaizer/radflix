import { createSlice } from '@reduxjs/toolkit';

export const snowboarding = createSlice({
  name: 'snowboarding',
  initialState: {
    snowboarding: [],
  },
  reducers: {
    setSnowboarding: (state, action) => {
      state.snowboarding = action.payload;
    },
  },
});

export const { setSnowboarding } = snowboarding.actions;

export default snowboarding.reducer;
