import { Box, Stack } from "@mantine/core";
import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import SideMenu from "./components/SideMenu";
import TopBar from "./components/TopBar";
import { useUserContext } from "./contexts/UserContext";

function App() {
  const { user, fetchUser } = useUserContext();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Stack sx={{ height: "100%", gap: 0 }}>
      <TopBar title="React Router 5" />

      {user?.active && (
        <Box sx={{ flex: 1, display: "flex", gap: 16 }} px="md" pb="md">
          <SideMenu />
          <Box sx={{ flex: 1 }}>
            <AppRoutes />
          </Box>
        </Box>
      )}
    </Stack>
  );
}

export default App;
