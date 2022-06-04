import { createSlice } from '@reduxjs/toolkit';

export const movies = createSlice({
  name: 'movies',
  initialState: {
    movies: {},
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movies.actions;

export default movies.reducer;
