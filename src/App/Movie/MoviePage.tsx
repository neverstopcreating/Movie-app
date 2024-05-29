import {Link, Params, useParams} from "react-router-dom";
import { useMovie } from "@/api/api.ts";
import { Box, Divider, Group, Image, Text } from "@mantine/core";
import { grayColor, lighterGrayColor } from "@/util/colors.ts";
import BackIcon from "@/Assets/Back-icon.svg";
import { MovieImage } from "@/App/DeviceList/MovieImage.tsx";

export function MoviePage() {
  const { id } = useParams<Params>();
  const movie = useMovie(Number(id));

  if (movie == null) {
    return <div></div>;
  }

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
          <MovieImage movie={movie} size={400} />
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
              <Text>{movie.vote_average}</Text>
            </Box>
          </Box>
        </Group>
      </Box>
    </Box>
  );
}
