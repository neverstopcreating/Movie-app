import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getMovie, getMovies, getSearchedMovie, Movie} from "@/api/api.ts";
import { MoviesViewType } from "@/App/MovieList/MoviesViewTypeSwitcher.tsx";

interface MoviesState {
  currentPage: number;
  totalPages: number;
  movies: Movie[];
  filteredMovies: Movie[];
  movie: Movie | null;
  searchTerm: string;
  viewType: MoviesViewType;
}

const initialState: MoviesState = {
  currentPage: 1,
  totalPages: 0,
  movies: [],
  filteredMovies: [],
  movie: null,
  searchTerm: "",
  viewType: "grid",
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number) => {
    const response = await getMovies(page);

    return {
      ...response,
    };
  },
);

export const fetchSearchedMovies = createAsyncThunk(
  "movies/fetchSearchedMovies",
  async (query: string) => {
    const response = await getSearchedMovie(query);
    return {
      ...response,
    };
  },
);

export const fetchMovie = createAsyncThunk(
  "movies/fetchMovie",
  async (movieId: number) => {
    const response = await getMovie(movieId);
    return response;
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      if (action.payload === "") {
        state.filteredMovies = state.movies;
      }
    },
    setViewType: (state, action: PayloadAction<MoviesViewType>) => {
      state.viewType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.totalPages = action.payload.total_pages;
      if (!state.searchTerm) {
        state.filteredMovies = action.payload.results;
      }
    });
    builder.addCase(fetchSearchedMovies.fulfilled, (state, action) => {
      state.filteredMovies = action.payload.results;
      state.totalPages = action.payload.total_pages;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
  },
});

export const { setCurrentPage, setSearchTerm, setViewType } =
  moviesSlice.actions;
export default moviesSlice.reducer;
