import {combineReducers, configureStore} from '@reduxjs/toolkit';
import moviesReducer from '../slices/moviesSlice.ts';
import configReducer from '../slices/configSlice.ts';

const rootReducer = combineReducers({
    movies: moviesReducer,
    config: configReducer,
})

export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
