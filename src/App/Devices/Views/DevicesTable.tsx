import { Device } from "@/api/api.ts";
import { DeviceImage } from "@/App/Devices/DeviceImage.tsx";
import { Box, lighten, Table } from "@mantine/core";

interface Props {
  devices: Device[];
}

export function DevicesTable({ devices }: Props) {
  return (
    <Box>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={140} c={"#bdbdbd"} fw={400}>
              {devices.length} devices
            </Table.Th>
            <Table.Th w={250} c={lighten("#000000", 0.35)}>
              PRODUCT LINE
            </Table.Th>
            <Table.Th c={lighten("#000000", 0.35)}>NAME</Table.Th>
          </Table.Tr>
        </Table.Thead>
      </Table>
      {devices.map((device) => (
        <DeviceRow key={device.id} device={device} />
      ))}
    </Box>
  );
}

interface RowProps {
  device: Device;
}

function DeviceRow({ device }: RowProps) {
  return (
    <Table highlightOnHover>
      <Table.Tbody>
        <Table.Tr key={device.id}>
          <Table.Td w={140}>
            <DeviceImage device={device} size="sm" />
          </Table.Td>
          <Table.Td w={250} c={lighten("#000000", 0.35)}>
            {device.line.name}
          </Table.Td>
          <Table.Td c={lighten("#000000", 0.35)}>
            {device.product.name}
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
