import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import moviesSlice from './allMovies';
import docsSlice from './docs';
import errorSlice from './error';
import filterSlice from './filter';
import loadingSlice from './loading';
import skatersSlice from './skaters';

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    error: errorSlice,
    movies: moviesSlice,
    filteredData: filterSlice,
    docsData: docsSlice,
    skaters: skatersSlice,
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
