import { Device } from "@/api/api.ts";
import { DeviceImage } from "@/App/DeviceList/DeviceImage.tsx";
import { Box, Card, Grid, lighten, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import {lighterGrayColor} from "@/util/colors.ts";

interface Props {
  devices: Device[];
}

export function DevicesGrid({ devices }: Props) {
  return (
    <Box>
      <Text c={"#bdbdbd"} size="xs">
        {devices.length} devices
      </Text>
      <Grid>
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </Grid>
    </Box>
  );
}

interface CardProps {
  device: Device;
}

function DeviceCard({ device }: CardProps) {
  return (
    <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 2 }}>
      <Card padding="lg" mt={15} radius="md" withBorder>
        <Card.Section ta="center" bg={"#f6f6f8"}>
          <DeviceImage device={device} size="md" />
        </Card.Section>
        <Link
          to={`/device/${device.id}`}
          style={{ color: lighten("#000000", 0.35), textDecoration:"none"}}
        >
          {device.product.name}
        </Link>
        <Text size="sm" c={lighterGrayColor}>
          {device.line.name}
        </Text>
      </Card>
    </Grid.Col>
  );
}
