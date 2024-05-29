import { Movie } from "@/api/api.ts";
import { Box, lighten, Table } from "@mantine/core";
import { grayColor } from "@/util/colors.ts";
import { Link } from "react-router-dom";
import { MovieImage } from "@/App/DeviceList/MovieImage.tsx";

interface Props {
  movies: (Movie & { imageUrl: string })[];
}

export function MovieTable({ movies }: Props) {
  return (
    <Box>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th miw={140} c={"#bdbdbd"} fw={400}>
              {movies.length} movies
            </Table.Th>
            <Table.Th
              w={250}
              c={grayColor}
              style={{ textTransform: "uppercase" }}
            >
              release date
            </Table.Th>
            <Table.Th c={grayColor} style={{ textTransform: "uppercase" }}>
              title
            </Table.Th>
              <Table.Th c={grayColor} style={{ textTransform: "uppercase" }}>
              language
            </Table.Th>
              <Table.Th c={grayColor} style={{ textTransform: "uppercase" }}>
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
      <Table.Td w={140} >
        <MovieImage  imageUrl={movie.imageUrl} title={movie.title}/>
      </Table.Td>
      <Table.Td w={250} c={grayColor}>
        {movie.release_date}
      </Table.Td>
      <Table.Td c={grayColor}>
        <Link
          to={`/movie/${movie.id}`}
          style={{ color: lighten("#000000", 0.35), textDecoration: "none" }}
        >
          {movie.title}
        </Link>
      </Table.Td>
        <Table.Td w={250} c={grayColor} style={{ textTransform: "uppercase" }}>
            {movie.original_language}
        </Table.Td>
        <Table.Td w={250} c={grayColor}>
            {movie.popularity.toFixed(1)}
        </Table.Td>
    </Table.Tr>
  );
}
