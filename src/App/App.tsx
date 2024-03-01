import "@mantine/core/styles.css";
import { AppShell, Group, Image, MantineProvider, Text } from "@mantine/core";
import LogoIcon from "@/Assets/Logo.svg";
import { AppRoutes } from "@/App/AppRoutes.tsx";
import { grayColor } from "@/util/colors.ts";

export function App() {
  return (
    <MantineProvider>
      <AppShell padding="md">
        <AppHeader />
        <AppShell.Main mt={60}>
          <AppRoutes />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export function AppHeader() {
  return (
    <AppShell.Header bg={"#f6f6f8"}>
      <Group>
        <Image src={LogoIcon} />
        <Text size="xl" c={"#838691"}>
          Devices
        </Text>
        <Text style={{ marginLeft: "auto" }} c={grayColor} size="sm" pr={45}>
          Karolina Uskure
        </Text>
      </Group>
    </AppShell.Header>
  );
}
