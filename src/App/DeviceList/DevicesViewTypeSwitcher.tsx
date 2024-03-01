import { ActionIcon, Box, Image } from "@mantine/core";
import GridActiveIcon from "@/Assets/GridActive.svg";
import GridDefaultIcon from "@/Assets/GridDefault.svg";
import ListActiveIcon from "@/Assets/ListActive.svg";
import ListDefaultIcon from "@/Assets/ListDefault.svg";

export type DevicesViewType = "grid" | "table";

export interface Props {
  viewType: DevicesViewType;
  onViewChange: (viewType: DevicesViewType) => void;
}

export function DevicesViewTypeSwitcher({ viewType, onViewChange }: Props) {
  return (
    <Box>
      <ActionIcon variant="subtle" onClick={() => onViewChange("table")}>
        <Image src={viewType === "table" ? ListActiveIcon : ListDefaultIcon} />
      </ActionIcon>
      <ActionIcon variant="subtle" onClick={() => onViewChange("grid")}>
        <Image src={viewType === "grid" ? GridActiveIcon : GridDefaultIcon} />
      </ActionIcon>
    </Box>
  );
}
