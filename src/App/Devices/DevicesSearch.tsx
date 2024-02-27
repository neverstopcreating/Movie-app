import { TextInput } from "@mantine/core";

type Props = {
  onSearch: (term: string) => void;
};

export function DevicesSearch({ onSearch }: Props) {
  return (
    <TextInput
      placeholder="Search"
      onChange={(event) => onSearch(event.currentTarget.value)}
    />
  );
}
