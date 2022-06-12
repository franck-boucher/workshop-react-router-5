import { Box, Group, Stack, Center } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import NewTaskButton from "../components/NewTaskButton";
import Page from "../components/Page";
import TaskForm from "../components/TaskForm";
import TaskListItem from "../components/TaskListItem";
import VerticalDivider from "../components/VerticalDivider";
import { useSideMenuContext } from "../contexts/SideMenuContext";
import { getTasks, Task } from "../utils/tasks";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [sideContent, setSideContent] = useState<
    "none" | "new" | { id: string }
  >("none");
  const { fetchTasksToValidate } = useSideMenuContext();

  const fetchTasks = useCallback(async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const onSuccess = () => {
    fetchTasks();
    fetchTasksToValidate();
  };

  return (
    <Page title="Tasks">
      <Group spacing="xl" sx={{ minHeight: "200px" }}>
        <Stack spacing="sm" sx={{ flex: 1 }}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskListItem
                key={task.id}
                task={task}
                onClick={() => setSideContent({ id: task.id })}
              />
            ))
          ) : (
            <Center sx={{ fontStyle: "italic" }}>No tasks yet</Center>
          )}
        </Stack>

        <VerticalDivider />

        <Box sx={{ flex: 1 }}>
          {sideContent === "none" && (
            <NewTaskButton onClick={() => setSideContent("new")} />
          )}

          {sideContent === "new" && (
            <TaskForm
              onClose={() => setSideContent("none")}
              onsuccess={onSuccess}
            />
          )}

          {typeof sideContent === "object" && (
            <TaskForm
              taskId={sideContent.id}
              onClose={() => setSideContent("none")}
              onsuccess={onSuccess}
            />
          )}
        </Box>
      </Group>
    </Page>
  );
}
