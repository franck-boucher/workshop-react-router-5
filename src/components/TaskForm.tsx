import {
  CloseButton,
  Group,
  Paper,
  Stack,
  Title,
  Button,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { createTask, deleteTask, editTask, getTask } from "../utils/tasks";

interface TaskFormProps {
  taskId?: string;
  onClose: () => void;
  onsuccess?: () => void;
}

export default function TaskForm({
  taskId,
  onClose,
  onsuccess,
}: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskId) {
      const fetchTask = async () => {
        const task = await getTask(taskId);
        if (task) {
          setTitle(task.title);
          setDescription(task.description);
        }
      };

      fetchTask();
    }
  }, [taskId]);

  const submitTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (taskId) await editTask({ id: taskId, title, description });
    else await createTask({ title, description });
    onsuccess?.();
    onClose();
  };

  const submitDeleteTask = async () => {
    if (taskId) {
      await deleteTask(taskId);
      onsuccess?.();
      onClose();
    }
  };

  return (
    <Paper withBorder p="md">
      <form onSubmit={submitTask}>
        <Stack>
          <Group position="apart">
            <Title order={3}>{taskId ? "Edit" : "New"} task</Title>
            <CloseButton
              title="Close popover"
              iconSize={20}
              onClick={onClose}
            />
          </Group>

          <TextInput
            id="title"
            placeholder="Title of the task"
            required
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextInput
            id="description"
            placeholder="Description of the task"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Group spacing="xs">
            <Button type="submit">{taskId ? "Edit" : "Create"}</Button>
            {taskId && (
              <Button type="button" color="red" onClick={submitDeleteTask}>
                Delete
              </Button>
            )}
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}
