import { ActionIcon, Image, TextInput } from "@mantine/core";
import CloseIcon from "@/assets/Close-icon.svg";
import SearchIcon from "@/assets/Search-icon.svg";

type Props = {
  onSearch: (term: string) => void;
  search: string;
};

export function MovieSearch({ onSearch, search }: Props) {
  const clearInput = () => {
    onSearch("");
    search = "";
  };
  return (
    <TextInput
      w={350}
      variant="filled"
      value={search}
      placeholder="Search"
      rightSection={
        <ActionIcon variant={"transparent"} onClick={clearInput}>
          <Image src={CloseIcon}></Image>
        </ActionIcon>
      }
      leftSection={<Image src={SearchIcon}></Image>}
      onChange={(event) => onSearch(event.currentTarget.value)}
    />
  );
}
