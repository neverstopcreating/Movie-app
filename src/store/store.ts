import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../slices/moviesSlice.ts';
import configReducer from '../slices/configSlice.ts';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        config: configReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
