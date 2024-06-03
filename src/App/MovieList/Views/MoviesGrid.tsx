import { Movie } from "@/api/api.ts";
import { Box, Card, Grid, lighten, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { lighterGrayColor } from "@/util/colors.ts";
import { MovieImage } from "@/App/MovieList/MovieImage.tsx";

interface Props {
    movies: (Movie & { imageUrl: string })[];
}

export function MoviesGrid({ movies }: Props) {

  return (
    <Box>
      <Text c={"#bdbdbd"} size="xs">
        {movies.length} movies
      </Text>
      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Box>
  );
}

interface CardProps {
    movie: Movie & { imageUrl: string };
}

function MovieCard({ movie }: CardProps) {
  return (
    <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 2.40 }}>
      <Card padding="lg" mt={15} radius="md" withBorder>
        <Card.Section ta="center" bg={"#f6f6f8"}>
          <MovieImage imageUrl={movie.imageUrl} title={movie.title} />
        </Card.Section>
        <Link
          to={`/movie/${movie.id}`}
          style={{
            color: lighten("#000000", 0.35),
            textDecoration: "none",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {movie.title}
        </Link>
        <Text size="sm" c={lighterGrayColor}>
          {movie.release_date}
        </Text>
      </Card>
    </Grid.Col>
  );
}
