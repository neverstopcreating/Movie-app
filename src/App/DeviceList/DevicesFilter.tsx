import {
  ActionIcon,
  Button,
  Checkbox,
  Divider,
  Group,
  Image,
  Popover,
  Text,
} from "@mantine/core";
import { useMemo, useState } from "react";
import { Device } from "@/api/api.ts";
import { grayColor, lighterGrayColor } from "@/util/colors.ts";
import CloseIcon from "@/Assets/Close-icon.svg";

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
    <Popover opened={opened} onChange={setOpened} width={250} offset={-40}>
      <Popover.Target>
        <Button
          variant="subtle"
          size="sm"
          c={lighterGrayColor}
          onClick={() => setOpened(true)}
          fw={"normal"}
        >
          Filter
        </Button>
      </Popover.Target>
      <Divider my="md" />
      <Popover.Dropdown>
        <Group c={grayColor} style={{ justifyContent: "space-between" }}>
          <Text>Filter</Text>
          <ActionIcon variant={"transparent"} onClick={() => setOpened(false)}>
            <Image src={CloseIcon}></Image>
          </ActionIcon>
        </Group>
        <Divider my="md" />
        <Checkbox.Group
          label="Product line"
          value={selectedProductLines}
          onChange={onSelectedProductLinesChange}
        >
          {productLines.map((productLine) => (
            <Checkbox
              key={productLine}
              value={productLine}
              label={productLine}
              mt={15}
            />
          ))}
        </Checkbox.Group>
      </Popover.Dropdown>
    </Popover>
  );
}
