import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fetchMovies } from '@/slices/moviesSlice';
import { fetchConfig } from '@/slices/configSlice';
import {store} from "@/store/store.ts";
import {MovieListPage} from "@/App/MovieList/MovieListPage.tsx";

jest.mock('@/slices/moviesSlice', () => ({
    fetchMovies: jest.fn(),
}));
jest.mock('@/slices/configSlice', () => ({
    fetchConfig: jest.fn(),
}));

describe('MovieListPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders MovieListPage component', () => {
        render(
            <Provider store={store}>
                <MovieListPage />
            </Provider>
        );

        expect(screen.getByText(/movies/i)).toBeInTheDocument();
    });

    test('fetches movies and config on load', () => {
        render(
            <Provider store={store}>
                <MovieListPage />
            </Provider>
        );

        expect(fetchMovies).toHaveBeenCalled();
        expect(fetchConfig).toHaveBeenCalled();
    });
});
