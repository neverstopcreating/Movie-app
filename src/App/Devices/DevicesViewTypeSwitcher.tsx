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
    {viewType === "table" ? (
      <ActionIcon variant="subtle">
        <Image src={ListActiveIcon}></Image>
      </ActionIcon>
    ) : (
      <ActionIcon variant="subtle">
        <Image
          src={ListDefaultIcon}
          onClick={() => onViewChange("table")}
        ></Image>
      </ActionIcon>
    )}
    {viewType === "grid" ? (
      <ActionIcon variant="subtle">
        <Image src={GridActiveIcon}></Image>
      </ActionIcon>
    ) : (
      <ActionIcon variant="subtle">
        <Image
          src={GridDefaultIcon}
          onClick={() => onViewChange("grid")}
        ></Image>
      </ActionIcon>
    )}
  </Box>
);
