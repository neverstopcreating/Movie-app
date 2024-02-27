import "@mantine/core/styles.css";
import {
  AppShell,
  Group,
  Image,
  lighten,
  MantineProvider,
  Text,
} from "@mantine/core";
import { DevicesPage } from "@/App/Devices/DevicesPage.tsx";
import LogoIcon from "@/App/Logo.svg";

export function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header bg={"#f6f6f8"}>
          <Group h="100%" px="md">
            <Image src={LogoIcon} />
            <Text size="xl" c={"#838691"}>Devices</Text>
            <Text
              style={{ marginLeft: "auto" }}
              c={lighten("#000000", 0.35)}
              size="sm"
            >
              Karolina Uskure
            </Text>
          </Group>
        </AppShell.Header>

        <AppShell.Main>
          <DevicesPage />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
