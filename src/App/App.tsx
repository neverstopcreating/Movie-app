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
import LogoIcon from "@/Assets/Logo.svg";

export function App() {
  return (
    <MantineProvider>
      <AppShell padding="md">
        <AppShell.Header bg={"#f6f6f8"}>
          {/* extract header to component (can be in this same file)*/}
          <Group>
            <Image src={LogoIcon} />
            <Text size="xl" c={"#838691"}>
              Devices
            </Text>
            <Text
              style={{ marginLeft: "auto" }}
              c={lighten("#000000", 0.35)}
              size="sm"
            >
              Karolina Uskure
            </Text>
          </Group>
        </AppShell.Header>

        <AppShell.Main mt={60}>
          <DevicesPage />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
