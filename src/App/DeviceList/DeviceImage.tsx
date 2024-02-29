import { Device } from "@/api/api.ts";

type DeviceImageSize = "sm" | "md" | "lg";

interface DeviceImageProps {
  device: Device;
  size: DeviceImageSize;
}

const deviceImageResolutions: Record<DeviceImageSize, number> = {
  sm: 25,
  md: 129,
  lg: 257,
};

export function DeviceImage({ device, size }: DeviceImageProps) {
  const resolution = deviceImageResolutions[size];
  const iconId = device.icon.id;
  const imageUrl = `https://static.ui.com/fingerprint/ui/icons/${iconId}_${resolution}x${resolution}.png`;

  return <img src={imageUrl} alt={device.product.name} />;
}
