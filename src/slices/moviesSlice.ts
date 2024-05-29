import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovie, getMovies, Movie } from "@/api/api.ts";
import { MoviesViewType } from "@/App/DeviceList/MoviesViewTypeSwitcher.tsx";

interface MoviesState {
  currentPage: number;
  totalPages: number;
  movies: Movie[];
  movie: Movie | null;
  searchTerm: string;
  viewType: MoviesViewType;
}

const initialState: MoviesState = {
  currentPage: 1,
  totalPages: 0,
  movies: [],
  movie: null,
  searchTerm: "",
  viewType: "grid",
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number) => {
    const response = await getMovies(page);
    // Slicing results to limit to 10 items per page as per task as api gives 20 by default
    const limitedResults = response.results.slice(0, 10);
    return {
      ...response,
      results: limitedResults,
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
    },
    setViewType: (state, action: PayloadAction<MoviesViewType>) => {
      state.viewType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
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
