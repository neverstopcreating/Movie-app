import {Box, TextInput} from "@mantine/core";

export function Search() {
    return;
    <Box>
        <TextInput
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
        />
    </Box>;
}
