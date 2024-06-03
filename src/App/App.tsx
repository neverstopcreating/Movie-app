import "@mantine/core/styles.css";
import { AppShell, Group, Image, MantineProvider, Text } from "@mantine/core";
import LogoIcon from "@/Assets/Entain.svg";
import { AppRoutes } from "@/App/AppRoutes.tsx";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store.ts";
import { fetchConfig } from "@/slices/configSlice.ts";
import { useEffect } from "react";
import styles from "@/util/styles.module.scss";

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
    <AppShell.Header className={styles.header}>
      <Group className={styles.group}>
        <Image src={LogoIcon} className={styles.logo} />
        <Text className={styles.title}>
          Cinema Reimagined: Where Every Screening is a Spectacle
        </Text>
        <Text className={styles.user}>Karolina Uskure</Text>
      </Group>
    </AppShell.Header>
  );
}
