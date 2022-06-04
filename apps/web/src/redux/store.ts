import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import moviesSlice from './allMovies';
import errorSlice from './error';
import filterSlice from './filter';
import loadingSlice from './loading';

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    error: errorSlice,
    movies: moviesSlice,
    filteredData: filterSlice,
    // This is where we add reducers.
    // Since we don't have any yet, leave this empty
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
