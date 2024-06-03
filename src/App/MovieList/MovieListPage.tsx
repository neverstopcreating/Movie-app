import { useEffect } from "react";
import {
  MoviesViewType,
  MoviesViewTypeSwitcher,
} from "./MoviesViewTypeSwitcher.tsx";
import { Configuration, getImageUrl, Movie } from "@/api/api.ts";
import { MoviesGrid } from "./Views/MoviesGrid.tsx";
import { Box, Divider, Group } from "@mantine/core";
import { MovieTable } from "@/App/MovieList/Views/MovieTable.tsx";
import { MovieSearch } from "@/App/MovieList/MovieSearch.tsx";
import { MoviePagination } from "@/App/MovieList/MoviePagination.tsx";
import { AppDispatch, RootState } from "@/store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchSearchedMovies,
  setCurrentPage,
  setSearchTerm,
  setViewType,
} from "@/slices/moviesSlice.ts";

export function MovieListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { currentPage, totalPages, filteredMovies, searchTerm, viewType } =
    useSelector((state: RootState) => state.movies);

  const config = useSelector((state: RootState) => state.config.config);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchSearchedMovies({ query: searchTerm, page: currentPage }));
    } else {
      dispatch(fetchMovies(currentPage));
    }
  }, [dispatch, searchTerm, currentPage]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Box>
      <Box display={"flex"} style={{ justifyContent: "space-between" }}>
        <MovieSearch
          onSearch={(term) => dispatch(setSearchTerm(term))}
          search={searchTerm}
        />
        <Group>
          <MoviesViewTypeSwitcher
            viewType={viewType}
            onViewChange={(type) => dispatch(setViewType(type))}
          />
        </Group>
      </Box>
      <Divider my="md" />
      <MoviesView viewType={viewType} movies={filteredMovies} config={config} />
      <MoviePagination
        //even though total amount of pages can be 4k+, it allows to show only 500 pages
        total={totalPages > 500 ? 500 : totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Box>
  );
}

interface MoviesViewProps {
  viewType: MoviesViewType;
  movies: Movie[];
  config: Configuration | null;
}

export function MoviesView({ viewType, movies, config }: MoviesViewProps) {
  const getImage = (path: string, size: string) =>
    config ? getImageUrl(config, path, size) : "";
  switch (viewType) {
    case "grid":
      return (
        <MoviesGrid
          movies={movies.map((movie) => ({
            ...movie,
            imageUrl: getImage(movie.poster_path, "w185"),
          }))}
        />
      );
    case "table":
      return (
        <MovieTable
          movies={movies.map((movie) => ({
            ...movie,
            imageUrl: getImage(movie.poster_path, "w92"),
          }))}
        />
      );
    default:
      return null;
  }
}
