import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './features/movies/moviesSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    movies: moviesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
