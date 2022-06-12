import { Paper, Title } from "@mantine/core";
import { Link } from "react-router-dom";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <Paper m="md" py="xs" px="md" withBorder>
      <Title order={1}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {title}
        </Link>
      </Title>
    </Paper>
  );
}
