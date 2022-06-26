import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import moviesSlice from './allMovies';
import bmxSlice from './bmx';
import dirtBikesSlice from './dirtBikes';
import docsSlice from './docs';
import errorSlice from './error';
import filterSlice from './filter';
import loadingSlice from './loading';
import skateboardingSlice from './skateboarding';
import skatersSlice from './skaters';
import snowboardingSlice from './snowboarding';
import surfingSlice from './surfing';

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    error: errorSlice,
    movies: moviesSlice,
    filteredData: filterSlice,
    docsData: docsSlice,
    skaters: skatersSlice,
    skateboarding: skateboardingSlice,
    snowboarding: snowboardingSlice,
    surfing: surfingSlice,
    bmx: bmxSlice,
    dirtBikes: dirtBikesSlice,
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
