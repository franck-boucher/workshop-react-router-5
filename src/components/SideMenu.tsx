import { Badge, Button, Paper, Stack } from "@mantine/core";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Checks, Home, ReportMoney, Stack2 } from "tabler-icons-react";
import { useUserContext } from "../contexts/UserContext";
import { useSideMenuContext } from "../contexts/SideMenuContext";

export default function SideMenu() {
  const location = useLocation();
  const { user } = useUserContext();
  const { tasksToValidate, fetchTasksToValidate, clearTasksToValidate } =
    useSideMenuContext();

  useEffect(() => {
    if (user) {
      if (user.canValidate) fetchTasksToValidate();
      else clearTasksToValidate();
    }
  }, [user]);

  return (
    <Paper withBorder p="md" sx={{ width: 250 }}>
      <Stack spacing="xs" sx={{ "a div": { justifyContent: "flex-start" } }}>
        <Button
          component={Link}
          to="/"
          variant={location.pathname === "/" ? "light" : "subtle"}
          leftIcon={<Home size={18} />}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/tasks"
          variant={location.pathname === "/tasks" ? "light" : "subtle"}
          leftIcon={<Stack2 size={18} />}
        >
          Tasks
        </Button>
        {user?.canValidate && (
          <Button
            component={Link}
            to="/validation"
            variant={location.pathname === "/validation" ? "light" : "subtle"}
            leftIcon={<Checks size={18} />}
            rightIcon={<Badge color="red">{tasksToValidate}</Badge>}
          >
            Validation
          </Button>
        )}
        <Button
          component={Link}
          to="/bills"
          variant={location.pathname === "/bills" ? "light" : "subtle"}
          leftIcon={<ReportMoney size={18} />}
        >
          Bills
        </Button>
      </Stack>
    </Paper>
  );
}
