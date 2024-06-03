import { ActionIcon, Box, Image } from "@mantine/core";
import GridActiveIcon from "@/assets/GridActive.svg";
import GridDefaultIcon from "@/assets/GridDefault.svg";
import ListActiveIcon from "@/assets/ListActive.svg";
import ListDefaultIcon from "@/assets/ListDefault.svg";

export type MoviesViewType = "grid" | "table";

export interface Props {
  viewType: MoviesViewType;
  onViewChange: (viewType: MoviesViewType) => void;
}

export function MoviesViewTypeSwitcher({ viewType, onViewChange }: Props) {
  return (
    <Box>
      <ActionIcon variant="subtle" onClick={() => onViewChange("table")} aria-label="table view">
        <Image src={viewType === "table" ? ListActiveIcon : ListDefaultIcon} />
      </ActionIcon>
      <ActionIcon variant="subtle" onClick={() => onViewChange("grid")} aria-label="grid view">
        <Image src={viewType === "grid" ? GridActiveIcon : GridDefaultIcon} />
      </ActionIcon>
    </Box>
  );
}
