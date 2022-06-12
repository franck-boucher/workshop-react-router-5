import { Group, Paper, Title } from "@mantine/core";

interface PageProps {
  title: string;
  leftContent?: React.ReactNode;
  children: React.ReactNode;
}

export default function Page({ title, leftContent, children }: PageProps) {
  return (
    <Paper withBorder p="md">
      <Group position="apart">
        <Title mb="1rem" order={2}>
          {title}
        </Title>
        {leftContent && <div>{leftContent}</div>}
      </Group>
      {children}
    </Paper>
  );
}
