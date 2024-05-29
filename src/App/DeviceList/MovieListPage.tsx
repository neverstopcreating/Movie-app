import { useMemo, useState } from "react";
import {
  MoviesViewType,
  MoviesViewTypeSwitcher,
} from "./MoviesViewTypeSwitcher.tsx";
import { Movie, useMovies } from "@/api/api.ts";
import { MoviesGrid } from "./Views/MoviesGrid.tsx";
import { Box, Divider, Group } from "@mantine/core";
import {MovieTable} from "@/App/DeviceList/Views/MovieTable.tsx";
import {MovieSearch} from "@/App/DeviceList/MovieSearch.tsx";

export function MovieListPage() {
  const movies = useMovies();
  const [viewType, setViewType] = useState<MoviesViewType>("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = useMemo(() => {
    let filteredMovies = movies;

    if (searchTerm) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filteredMovies;
  }, [movies, searchTerm]);

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
