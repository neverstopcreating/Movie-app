import { Device } from "@/api/api.ts";
import { DeviceImage } from "@/App/Devices/DeviceImage.tsx";
import { Box, Table } from "@mantine/core";

interface Props {
  devices: Device[];
}

export function DevicesTable({ devices }: Props) {
  return (
    <Box>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{devices.length} devices</Table.Th>
            <Table.Th>PRODUCT LINE</Table.Th>
            <Table.Th>NAME</Table.Th>
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
    <Table>
      <Table.Tbody>
        <Table.Tr key={device.id}>
          <Table.Td>
            <DeviceImage device={device} size="sm" />
          </Table.Td>
          <Table.Td>{device.line.name}</Table.Td>
          <Table.Td>{device.product.name}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
