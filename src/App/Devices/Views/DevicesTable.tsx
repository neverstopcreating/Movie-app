import { Device } from "@/api/api.ts";
import { DeviceImage } from "@/App/Devices/DeviceImage.tsx";
import { Box, Table } from "@mantine/core";
import { grayColor } from "@/util/colors.ts";

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
      <Table.Td c={grayColor}>{device.product.name}</Table.Td>
    </Table.Tr>
  );
}
