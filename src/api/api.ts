import { useEffect, useState } from "react";

export interface DevicesData {
  devices: Device[];
  version: string;
}

export interface Device {
  guids: string[];
  icon: {
    id: string;
    resolutions: [number, number][];
  };
  id: string;
  line: {
    id: string;
    name: string;
  };
  product: {
    abbrev: string;
    name: string;
  };
  shortnames: string[];
  sysids: number[];
  triplets: string[];
}

// TODO: handle non-200 (non-ok) status codes
// TODO: handle possible data format changes (how?)
export async function getDevices(): Promise<Device[]> {
  const response = await fetch(
    "https://static.ui.com/fingerprint/ui/public.json",
  );
  const data: DevicesData = await response.json();
  return data.devices;
}

export function useDevices(): Device[] {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const devices = await getDevices();
      setDevices(devices);
    };

    fetchData();
  }, []);

  return devices;
}
