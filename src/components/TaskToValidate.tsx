import { Button, Paper, PaperProps, Text } from "@mantine/core";
import { Task } from "../utils/tasks";

type TaskToValidateProps = PaperProps<"div"> & {
  task: Task;
  validate: () => void;
};

export default function TaskToValidate({
  task,
  validate,
  ...props
}: TaskToValidateProps) {
  return (
    <Paper
      p="sm"
      withBorder
      sx={{ display: "flex", justifyContent: "space-between" }}
      {...props}
    >
      <div>
        <Text weight="bold">{task.title}</Text>
        <Text>{task.description}</Text>
      </div>
      <Button type="button" onClick={validate} color="green">
        Validate
      </Button>
    </Paper>
  );
}
