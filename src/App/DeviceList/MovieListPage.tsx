import { useMemo, useState } from "react";
import {
  MoviesViewType,
  MoviesViewTypeSwitcher,
} from "./MoviesViewTypeSwitcher.tsx";
import { Movie, useMovies } from "@/api/api.ts";
import { MoviesGrid } from "./Views/MoviesGrid.tsx";
import {Box, Divider, Group} from "@mantine/core";
import {MovieTable} from "@/App/DeviceList/Views/MovieTable.tsx";
import {MovieSearch} from "@/App/DeviceList/MovieSearch.tsx";
import {MoviePagination} from "@/App/DeviceList/Views/MoviePagination.tsx";

export function MovieListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const {results, total_pages} = useMovies(currentPage);
  const [viewType, setViewType] = useState<MoviesViewType>("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = useMemo(() => {
    let filteredMovies = results;

    if (searchTerm) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filteredMovies;
  }, [results, searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box>
      <Box display={"flex"} style={{ justifyContent: "space-between" }}>
        <MovieSearch onSearch={setSearchTerm} search={searchTerm} />
        <Group>
          <MoviesViewTypeSwitcher
            viewType={viewType}
            onViewChange={setViewType}
          />
        </Group>
      </Box>
      <Divider my="md" />
      <MoviesView viewType={viewType} movies={filteredMovies} />
      <MoviePagination total={total_pages} currentPage={currentPage} onPageChange={handlePageChange} />
    </Box>
  );
}

interface MoviesViewProps {
  viewType: MoviesViewType;
  movies: Movie[];
}

export function MoviesView({ viewType, movies }: MoviesViewProps) {
  switch (viewType) {
    case "grid":
      return <MoviesGrid movies={movies} />;
    case "table":
      return <MovieTable movies={movies} />;
  }
}
