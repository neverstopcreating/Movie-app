import { Device } from "@/api/api.ts";
import { DeviceImage } from "@/App/DeviceList/DeviceImage.tsx";
import { Box, lighten, Table } from "@mantine/core";
import { grayColor } from "@/util/colors.ts";
import { Link } from "react-router-dom";

interface Props {
  devices: Device[];
}

export function DevicesTable({ devices }: Props) {
  return (
    <Box>
      <Table>
        <Table.Thead>
          <Table.Tr>
            {/*  Reconsider fixed width in favor if max-width or min-width */}
            {/* extract color */}
            <Table.Th w={140} c={"#bdbdbd"} fw={400}>
              {devices.length} devices
            </Table.Th>
            {/*  set text uppercase via style */}
            <Table.Th w={250} c={grayColor}>
              PRODUCT LINE
            </Table.Th>
            <Table.Th c={grayColor}>NAME</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {devices.map((device) => (
            <DeviceRow key={device.id} device={device} />
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  );
}

interface RowProps {
  device: Device;
}

function DeviceRow({ device }: RowProps) {
  return (
    <Table.Tr key={device.id}>
      <Table.Td w={140}>
        <DeviceImage device={device} size="sm" />
      </Table.Td>
      <Table.Td w={250} c={grayColor}>
        {device.line.name}
      </Table.Td>
      <Table.Td c={grayColor}>
        <Link
          to={`/device/${device.id}`}
          style={{ color: lighten("#000000", 0.35), textDecoration: "none" }}
        >
          {device.product.name}
        </Link>
      </Table.Td>
    </Table.Tr>
  );
}
