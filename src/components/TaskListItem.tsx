import { Badge, Paper, PaperProps, Text } from "@mantine/core";
import { Task } from "../utils/tasks";

type TaskListItemProps = PaperProps<"div"> & {
  task: Task;
};

export default function TaskListItem({ task, ...props }: TaskListItemProps) {
  return (
    <Paper
      p="sm"
      withBorder
      sx={{
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      {...props}
    >
      <Text weight="bold">{task.title}</Text>

      <Badge color={task.isValidated ? "green" : "orange"} variant="outline">
        {task.isValidated ? "Validated" : "Not validated"}
      </Badge>
    </Paper>
  );
}
