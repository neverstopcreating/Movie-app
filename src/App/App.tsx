import "@mantine/core/styles.css";
import { AppShell, Group, Image, MantineProvider, Text } from "@mantine/core";
import LogoIcon from "@/Assets/Entain.svg";
import { AppRoutes } from "@/App/AppRoutes.tsx";
import { grayColor } from "@/util/colors.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store.ts";
import { fetchConfig } from "@/slices/configSlice.ts";
import { useEffect } from "react";

export function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

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
          Cinema Reimagined: Where Every Screening is a Spectacle
        </Text>
        <Text style={{ marginLeft: "auto" }} c={grayColor} size="sm" pr={45}>
          Karolina Uskure
        </Text>
      </Group>
    </AppShell.Header>
  );
}
