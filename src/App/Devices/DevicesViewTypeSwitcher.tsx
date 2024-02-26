import { FC } from "react";
import { ActionIcon } from "@mantine/core";
import { IconLayoutGrid, IconLayoutRows } from "@tabler/icons-react";

export type DevicesViewType = "grid" | "table";

export interface Props {
  viewType: DevicesViewType;
  onViewChange: (viewType: DevicesViewType) => void;
}

export const DevicesViewTypeSwitcher: FC<Props> = ({
  viewType,
  onViewChange,
}) => (
  <div>
    <ActionIcon
      variant={viewType === "grid" ? "filled" : "outline"}
      onClick={() => onViewChange("grid")}
    >
      <IconLayoutGrid style={{ width: "70%", height: "70%" }} stroke={1.5} />
    </ActionIcon>
    <ActionIcon
      variant={viewType === "table" ? "filled" : "outline"}
      onClick={() => onViewChange("table")}
    >
      <IconLayoutRows style={{ width: "70%", height: "70%" }} stroke={1.5} />
    </ActionIcon>
  </div>
);
