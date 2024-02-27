import { FC } from "react";
import { ActionIcon, Box, Image } from "@mantine/core";
import GridActiveIcon from "@/App/GridActive.svg";
import GridDefaultIcon from "@/App/GridDefault.svg";
import ListActiveIcon from "@/App/ListActive.svg";
import ListDefaultIcon from "@/App/ListDefault.svg";

export type DevicesViewType = "grid" | "table";

export interface Props {
  viewType: DevicesViewType;
  onViewChange: (viewType: DevicesViewType) => void;
}

export const DevicesViewTypeSwitcher: FC<Props> = ({
  viewType,
  onViewChange,
}) => (
  <Box>
    <ActionIcon>
      <Image src={GridDefaultIcon}></Image>
    </ActionIcon>
    <ActionIcon onClick={() => onViewChange("grid")}>
      <Image src={GridActiveIcon}></Image>
    </ActionIcon>

    <ActionIcon>
      <Image src={ListDefaultIcon}></Image>
    </ActionIcon>
    <ActionIcon onClick={() => onViewChange("table")}>
      <Image src={ListActiveIcon}></Image>
    </ActionIcon>
  </Box>
);
