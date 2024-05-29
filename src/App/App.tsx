import "@mantine/core/styles.css";
import { AppShell, Group, Image, MantineProvider, Text } from "@mantine/core";
import LogoIcon from "@/Assets/Entain.svg";
import { AppRoutes } from "@/App/AppRoutes.tsx";
import { grayColor } from "@/util/colors.ts";
import {Provider} from "react-redux";
import {store} from "@/store/store.ts";

export function App() {
  return (
      <Provider store={store}>
    <MantineProvider>
      <AppShell padding="md">
        <AppHeader />
        <AppShell.Main mt={60}>
          <AppRoutes />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
      </Provider>
  );
}

export function AppHeader() {
  return (
    <AppShell.Header bg={"#f6f6f8"}>
      <Group>
        <Image src={LogoIcon} />
        <Text size="xl" c={"#838691"}>
          Cinema Reimagined: Where Every Screening is a Spectacle
        </Text>
        <Text style={{ marginLeft: "auto" }} c={grayColor} size="sm" pr={45}>
          Karolina Uskure
        </Text>
      </Group>
    </AppShell.Header>
  );
}
