import { Movie } from "@/api/api.ts";
import { Box, Card, Grid, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { MovieImage } from "@/App/MovieList/MovieImage.tsx";
import styles from "@/util/styles.module.scss";

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
      <Card className={styles['movie-card']} withBorder>
        <Card.Section className={styles['movie-card-section']}>
          <MovieImage imageUrl={movie.imageUrl} title={movie.title} />
        </Card.Section>
        <Link
          to={`/movie/${movie.id}`}
          className={styles['movie-card-link']}
        >
          {movie.title}
        </Link>
        <Text className={styles['movie-card-text']}>
          {movie.release_date}
        </Text>
      </Card>
    </Grid.Col>
  );
}
