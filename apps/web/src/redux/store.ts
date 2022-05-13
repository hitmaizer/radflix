import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import errorSlice from './error';
import loadingSlice from './loading';

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    error: errorSlice,
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
