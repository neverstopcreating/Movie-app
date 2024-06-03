import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovie, getMovies, getSearchedMovie, Movie } from "@/api/api.ts";
import { MoviesViewType } from "@/App/MovieList/MoviesViewTypeSwitcher.tsx";

interface MoviesState {
  currentPage: number;
  totalPages: number;
  movies: Movie[];
  filteredMovies: Movie[];
  previousMovies: Movie[];
  movie: Movie | null;
  searchTerm: string;
  viewType: MoviesViewType;
}

const initialState: MoviesState = {
  currentPage: 1,
  totalPages: 0,
  movies: [],
  filteredMovies: [],
  previousMovies: [],
  movie: null,
  searchTerm: "",
  viewType: "grid",
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number) => {
    //Slicing logic to match task requirment for 10 movies per page as themoviedb API returns 20 movies per page
    let moviesToShow: Movie[] = [];
    const actualPage = Math.ceil(page / 2);
    const response = await getMovies(actualPage);

    const moviesFirstHalf = response.results.slice(0, 10);
    const moviesSecondHalf = response.results.slice(10, 20);

    moviesToShow = page % 2 === 1 ? moviesFirstHalf : moviesSecondHalf;

    return {
      results: moviesToShow,
      total_pages: response.total_pages * 2,
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
      state.filteredMovies = action.payload.results;
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
