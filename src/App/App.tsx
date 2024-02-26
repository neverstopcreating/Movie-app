import "@mantine/core/styles.css";
import { AppShell, Group, MantineProvider, Text } from "@mantine/core";
import { DevicesPage } from "@/App/Devices/DevicesPage.tsx";

export function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Group h="100%" px="md">
            <Text size="xl">Devices</Text>
          </Group>
        </AppShell.Header>

        <AppShell.Main>
          <DevicesPage />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
