import { useEffect, useMemo, useState } from "react";
import {
  DevicesViewType,
  DevicesViewTypeSwitcher,
} from "./DevicesViewTypeSwitcher.tsx";
import { Device, getDevices } from "@/api/api.ts";
import { DevicesTable } from "./Views/DevicesTable.tsx";
import { DevicesGrid } from "./Views/DevicesGrid.tsx";
import { Box, Divider } from "@mantine/core";
import { DevicesFilter } from "@/App/Devices/DevicesFilter.tsx";
import { DevicesSearch } from "@/App/Devices/DevicesSearch.tsx";

export function DevicesPage() {
  const [viewType, setViewType] = useState<DevicesViewType>("grid");
  const [devices, setDevices] = useState<Device[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProductLines, setSelectedProductLines] = useState<string[]>(
    [],
  );

  useEffect(() => {
    const fetchData = async () => {
      const devices = await getDevices();
      setDevices(devices);
    };

    fetchData();
  }, []);

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
      <Box display={"flex"}>
        <DevicesSearch onSearch={setSearchTerm} />
        <DevicesViewTypeSwitcher
          viewType={viewType}
          onViewChange={setViewType}
        />
        <DevicesFilter
          selectedProductLines={selectedProductLines}
          onSelectedProductLinesChange={setSelectedProductLines}
          devices={devices}
        />
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
