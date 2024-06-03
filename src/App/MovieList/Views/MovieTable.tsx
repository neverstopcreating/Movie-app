import { Movie } from "@/api/api.ts";
import { Box, Table } from "@mantine/core";
import { Link } from "react-router-dom";
import { MovieImage } from "@/App/MovieList/MovieImage.tsx";
import styles from "@/App/styles/styles.module.scss";

interface Props {
  movies: (Movie & { imageUrl: string })[];
}

export function MovieTable({ movies }: Props) {
  return (
    <Box>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className={styles["movie-table-header-count"]}>
              {movies.length} movies
            </Table.Th>
            <Table.Th className={styles["movie-table-header-release-date"]}>
              release date
            </Table.Th>
            <Table.Th className={styles["movie-table-header-title"]}>
              title
            </Table.Th>
            <Table.Th className={styles["movie-table-header-language"]}>
              language
            </Table.Th>
            <Table.Th className={styles["movie-table-header-popularity"]}>
              popularity
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {movies.map((movie) => (
            <MovieRow key={movie.title} movie={movie} />
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  );
}

interface RowProps {
  movie: Movie & { imageUrl: string };
}

function MovieRow({ movie }: RowProps) {
  return (
    <Table.Tr key={movie.id}>
      <Table.Td className={styles["movie-row-cell-image"]}>
        <MovieImage imageUrl={movie.imageUrl} title={movie.title} />
      </Table.Td>
      <Table.Td className={styles["movie-row-cell-date"]}>
        {movie.release_date}
      </Table.Td>
      <Table.Td className={styles["movie-row-cell-title"]}>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </Table.Td>
      <Table.Td className={styles["movie-row-cell-language"]}>
        {movie.original_language}
      </Table.Td>
      <Table.Td className={styles["movie-row-cell-popularity"]}>
        {movie.popularity.toFixed(1)}
      </Table.Td>
    </Table.Tr>
  );
}
