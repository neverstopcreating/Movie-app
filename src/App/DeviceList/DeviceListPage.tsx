import { useMemo, useState } from "react";
import {
  DevicesViewType,
  DevicesViewTypeSwitcher,
} from "./DevicesViewTypeSwitcher.tsx";
import { Device, useDevices } from "@/api/api.ts";
import { DevicesTable } from "./Views/DevicesTable.tsx";
import { DevicesGrid } from "./Views/DevicesGrid.tsx";
import { Box, Divider, Group } from "@mantine/core";
import { DevicesFilter } from "@/App/DeviceList/DevicesFilter.tsx";
import { DevicesSearch } from "@/App/DeviceList/DevicesSearch.tsx";

export function DeviceListPage() {
  const devices = useDevices();
  const [viewType, setViewType] = useState<DevicesViewType>("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProductLines, setSelectedProductLines] = useState<string[]>(
    [],
  );

  const filteredDevices = useMemo(() => {
    let filteredDevices = devices;

    if (selectedProductLines.length > 0) {
      filteredDevices = filteredDevices.filter((device) =>
        selectedProductLines.includes(device.line.name),
      );
    }

    if (searchTerm) {
      filteredDevices = filteredDevices.filter((device) =>
        device.product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filteredDevices;
  }, [devices, searchTerm, selectedProductLines]);

  return (
    <Box>
      <Box display={"flex"} style={{ justifyContent: "space-between" }}>
        <DevicesSearch onSearch={setSearchTerm} search={searchTerm} />
        <Group>
          <DevicesViewTypeSwitcher
            viewType={viewType}
            onViewChange={setViewType}
          />
          <DevicesFilter
            selectedProductLines={selectedProductLines}
            onSelectedProductLinesChange={setSelectedProductLines}
            devices={devices}
          />
        </Group>
      </Box>
      <Divider my="md" />
      <DevicesView viewType={viewType} devices={filteredDevices} />
    </Box>
  );
}

interface DevicesViewProps {
  viewType: DevicesViewType;
  devices: Device[];
}

export function DevicesView({ viewType, devices }: DevicesViewProps) {
  switch (viewType) {
    case "grid":
      return <DevicesGrid devices={devices} />;
    case "table":
      return <DevicesTable devices={devices} />;
  }
}
