import {
  Box,
  Button,
  Checkbox,
  Drawer,
  lighten,
  ScrollArea,
} from "@mantine/core";
import { useMemo, useState } from "react";
import { Device } from "@/api/api.ts";

interface Props {
  devices: Device[];
  selectedProductLines: string[];
  onSelectedProductLinesChange: (onProductLines: string[]) => void;
}

export function DevicesFilter({
  devices,
  selectedProductLines,
  onSelectedProductLinesChange,
}: Props) {
  const [opened, setOpened] = useState(false);

  const productLines = useMemo(() => {
    const productLines = new Set<string>();
    devices.forEach((device) => {
      productLines.add(device.line.name);
    });
    return [...productLines];
  }, [devices]);

  return (
    <Box>
      <Button
        onClick={() => setOpened(true)}
        variant="subtle"
        size="xs"
        c={lighten("#000000", 0.55)}
      >
        Filter
      </Button>
      {/* TODO: popover */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Filter"
        padding="xl"
        size="sm"
        position="right"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Checkbox.Group
          label="Product line"
          value={selectedProductLines}
          onChange={onSelectedProductLinesChange}
        >
          {productLines.map((productLine) => (
            <Checkbox value={productLine} label={productLine} mt={15} />
          ))}
        </Checkbox.Group>
      </Drawer>
    </Box>
  );
}
