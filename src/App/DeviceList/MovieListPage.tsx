import { useEffect, useMemo } from "react";
import {
  MoviesViewType,
  MoviesViewTypeSwitcher,
} from "./MoviesViewTypeSwitcher.tsx";
import {Configuration, getImageUrl, Movie} from "@/api/api.ts";
import { MoviesGrid } from "./Views/MoviesGrid.tsx";
import { Box, Divider, Group } from "@mantine/core";
import { MovieTable } from "@/App/DeviceList/Views/MovieTable.tsx";
import { MovieSearch } from "@/App/DeviceList/MovieSearch.tsx";
import { MoviePagination } from "@/App/DeviceList/MoviePagination.tsx";
import { AppDispatch, RootState } from "@/store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  setCurrentPage,
  setSearchTerm,
  setViewType,
} from "@/slices/moviesSlice.ts";

export function MovieListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { currentPage, totalPages, movies, searchTerm, viewType } = useSelector(
    (state: RootState) => state.movies,
  );
  const { config } = useSelector((state: RootState) => state.config);

  useEffect(() => {
    console.log("Dispatching fetchMovies thunk");
    dispatch(fetchMovies(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    console.log("Movies state:", movies); // Log the movies state
  }, [movies]);

  const filteredMovies = useMemo(() => {
    let filteredMovies = movies;

    if (searchTerm) {
      filteredMovies = filteredMovies.filter((movie: Movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filteredMovies;
  }, [movies, searchTerm]);

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
      <MoviesView viewType={viewType} movies={filteredMovies} config={config}/>
      <MoviePagination
        total={totalPages}
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
  const getImage = (path: string,size:string) => config ? getImageUrl(config, path, size) : '';
  switch (viewType) {
    case "grid":
      return <MoviesGrid movies={movies.map(movie => ({ ...movie, imageUrl: getImage(movie.poster_path,'w200') }))} />;
    case "table":
      return <MovieTable movies={movies.map(movie => ({ ...movie, imageUrl: getImage(movie.poster_path, 'w200') }))} />;
    default:
      return null;
  }
}
