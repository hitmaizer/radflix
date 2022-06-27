import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import moviesSlice from './allMovies';
import bmxSlice from './bmx';
import bmxDocsSlice from './bmxDocs';
import dirtBikesSlice from './dirtBikes';
import docsSlice from './docs';
import errorSlice from './error';
import filterSlice from './filter';
import loadingSlice from './loading';
import skateboardingSlice from './skateboarding';
import skateDocsSlice from './skateDocs';
import skatersSlice from './skaters';
import snowboardingSlice from './snowboarding';
import snowDocsSlice from './snowDocs';
import surfDocsSlice from './surfDocs';
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
    skateDocs: skateDocsSlice,
    snowDocs: snowDocsSlice,
    bmxDocs: bmxDocsSlice,
    surfDocs: surfDocsSlice,
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
