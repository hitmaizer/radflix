import { createSlice } from '@reduxjs/toolkit';

export const filter = createSlice({
  name: 'filter',
  initialState: {
    filter: [],
  },
  reducers: {
    setFilteredData: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilteredData } = filter.actions;

export default filter.reducer;
