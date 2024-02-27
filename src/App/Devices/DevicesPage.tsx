import { useEffect, useState } from "react";
import {
  DevicesViewType,
  DevicesViewTypeSwitcher,
} from "./DevicesViewTypeSwitcher.tsx";
import { Device, getDevices } from "@/api/api.ts";
import { DevicesTable } from "./Views/DevicesTable.tsx";
import { DevicesGrid } from "./Views/DevicesGrid.tsx";
import { Box } from "@mantine/core";

export function DevicesPage() {
  const [viewType, setViewType] = useState<DevicesViewType>("grid");
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const devices = await getDevices();
      setDevices(devices);
    };

    fetchData();
  }, []);

  return (
    <Box ml={30}>
      <DevicesViewTypeSwitcher viewType={viewType} onViewChange={setViewType} />
      <DevicesView viewType={viewType} devices={devices} />
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

export function Filter() {
  return <input type="search" placeholder="Filter" />;
}
