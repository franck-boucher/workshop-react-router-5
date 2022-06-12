import { Stack, Center } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import TaskToValidate from "../components/TaskToValidate";
import { useSideMenuContext } from "../contexts/SideMenuContext";
import { getTasksToValidate, Task, validateTask } from "../utils/tasks";

export default function Validation() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { fetchTasksToValidate } = useSideMenuContext();

  const fetchTasks = useCallback(async () => {
    const tasks = await getTasksToValidate();
    setTasks(tasks);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const validate = async (task: Task) => {
    await validateTask(task.id);
    fetchTasks();
    fetchTasksToValidate();
  };

  return (
    <Page title="Validate tasks">
      <Stack>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskToValidate
              key={task.id}
              task={task}
              validate={() => validate(task)}
            />
          ))
        ) : (
          <Center sx={{ fontStyle: "italic" }}>No tasks to validate</Center>
        )}
      </Stack>
    </Page>
  );
}
