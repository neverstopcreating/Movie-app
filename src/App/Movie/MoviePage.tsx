import { Link, useParams } from "react-router-dom";
import { Box, Divider, Group, Image, Text } from "@mantine/core";
import { grayColor, lighterGrayColor } from "@/util/colors.ts";
import BackIcon from "@/assets/Back-icon.svg";
import { MovieImage } from "@/App/MovieList/MovieImage.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store.ts";
import { getImageUrl } from "@/api/api.ts";
import { fetchMovie } from "@/slices/moviesSlice.ts";
import { useEffect } from "react";
import {fetchConfig} from "@/slices/configSlice.ts";

export function MoviePage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const movie = useSelector((state: RootState) => state.movies.movie);
  const config = useSelector((state: RootState) => state.config.config);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie(Number(id)));
      dispatch(fetchConfig())
    }
  }, [dispatch, id]);

  if ( !movie || !config) {
    return <div>Loading...</div>;
  }

  const imageUrl = getImageUrl(config, movie.poster_path, "w342");

  return (
    <Box>
      <Group c={lighterGrayColor}>
        <Link to={`/`}>
          <Image src={BackIcon}></Image>
        </Link>
        <Text ml={"45%"}>{movie.title}</Text>
      </Group>
      <Divider my="md" />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Group>
          <MovieImage imageUrl={imageUrl} title={movie.title} />
          <Box w={400} c={grayColor}>
            <Box display={"flex"} style={{ justifyContent: "space-between" }}>
              <Text>Movie Title</Text>
              <Text>{movie.title}</Text>
            </Box>
            <Divider my="md" />
            <Box display={"flex"} style={{ justifyContent: "space-between" }}>
              <Text>Release date</Text>
              <Text>{movie.release_date}</Text>
            </Box>
            <Divider my="md" />
            <Box display={"flex"} style={{ justifyContent: "space-between" }}>
              <Text>Language</Text>
              <Text>{movie.original_language}</Text>
            </Box>
            <Divider my="md" />
            <Box display={"flex"} style={{ justifyContent: "space-between" }}>
              <Text>Popularity</Text>
              <Text>{movie.popularity.toFixed(1)}</Text>
            </Box>
            <Divider my="md" />
            <Box display={"flex"} style={{ justifyContent: "space-between" }}>
              <Text>Vote Count</Text>
              <Text>{movie.vote_count}</Text>
            </Box>
            <Divider my="md" />
            <Box display={"flex"} style={{ justifyContent: "space-between" }}>
              <Text>Vote Average</Text>
              <Text>{movie.vote_average.toFixed(1)}</Text>
            </Box>
          </Box>
        </Group>
      </Box>
    </Box>
  );
}
