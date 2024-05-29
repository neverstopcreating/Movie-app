import { useMemo, useState } from "react";
import {
  MoviesViewType,
  MoviesViewTypeSwitcher,
} from "./MoviesViewTypeSwitcher.tsx";
import {Movie, useImage, useMovies} from "@/api/api.ts";
import { MoviesGrid } from "./Views/MoviesGrid.tsx";
import { Box, Divider, Group } from "@mantine/core";

export function MovieListPage() {
  const movies = useMovies();
  const [viewType, setViewType] = useState<MoviesViewType>("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProductLines, setSelectedProductLines] = useState<string[]>(
    [],
  );

  const filteredMovies = useMemo(() => {
    let filteredMovies = movies;

    if (selectedProductLines.length > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        selectedProductLines.includes(movie.title),
      );
    }

    if (searchTerm) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filteredMovies;
  }, [movies, searchTerm, selectedProductLines]);

  return (
    <Box>
      <Box display={"flex"} style={{ justifyContent: "space-between" }}>
        {/*<DevicesSearch onSearch={setSearchTerm} search={searchTerm} />*/}
        <Group>
          <MoviesViewTypeSwitcher
            viewType={viewType}
            onViewChange={setViewType}
          />
          {/*<DevicesFilter*/}
          {/*  selectedProductLines={selectedProductLines}*/}
          {/*  onSelectedProductLinesChange={setSelectedProductLines}*/}
          {/*  devices={devices}*/}
          {/*/>*/}
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
      // return <DevicesTable devices={devices} />;
  }
}
