import { Link, useParams } from "react-router-dom";
import { useMovies } from "@/api/api.ts";
import { Box, Divider, Group, Image, Text } from "@mantine/core";
import { grayColor, lighterGrayColor } from "@/util/colors.ts";
import BackIcon from "@/Assets/Back-icon.svg";

export function MoviePage() {
  const { id } = useParams();
  const movies = useMovies();

  const movie = movies.find((d) => d.id === id);

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
          <Box w={400} c={grayColor}>
            <Box display={"flex"} style={{ justifyContent: "space-between" }}>
              <Text>Product line</Text>
              <Text>{movie.title}</Text>
            </Box>
            <Divider my="md" />
            <Box display={"flex"} style={{ justifyContent: "space-between" }}>
              <Text>ID</Text>
              <Text>{movie.release_date}</Text>
            </Box>
            {/*<Divider my="md" />*/}
            {/*<Box display={"flex"} style={{ justifyContent: "space-between" }}>*/}
            {/*  <Text>Name</Text>*/}
            {/*  <Text>{device.product.name}</Text>*/}
            {/*</Box>*/}
            {/*<Divider my="md" />*/}
            {/*<Box display={"flex"} style={{ justifyContent: "space-between" }}>*/}
            {/*  <Text>Short name</Text>*/}
            {/*  <Text>{device.shortnames}</Text>*/}
            {/*</Box>*/}

            {/*<Divider my="md" />*/}
            {/*<Box display={"flex"} style={{ justifyContent: "space-between" }}>*/}
            {/*  <Text>Max. power</Text>*/}
            {/*  <Text>-</Text>*/}
            {/*</Box>*/}
            {/*<Divider my="md" />*/}
            {/*<Box display={"flex"} style={{ justifyContent: "space-between" }}>*/}
            {/*  <Text>Speed</Text>*/}
            {/*  <Text>-</Text>*/}
            {/*</Box>*/}
            {/*<Divider my="md" />*/}
            {/*<Box display={"flex"} style={{ justifyContent: "space-between" }}>*/}
            {/*  <Text>Number of ports</Text>*/}
            {/*  <Text>-</Text>*/}
            {/*</Box>*/}
            {/*<Divider my="md" />*/}
          </Box>
        </Group>
      </Box>
    </Box>
  );
}
