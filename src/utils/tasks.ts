// import localforage from "localforage";
import { apiUrl } from "./config";

export type Task = {
  id: string;
  title: string;
  description: string;
  isValidated: boolean;
};

export async function getTasks(): Promise<Task[]> {
  return fetch(`${apiUrl}/api/tasks`).then((res) => res.json());
}

export async function createTask({
  title,
  description,
}: Pick<Task, "title" | "description">): Promise<Task> {
  const data = new FormData();
  data.append("title", title);
  data.append("description", description);
  return fetch(`${apiUrl}/api/tasks`, { method: "POST", body: data }).then(
    (res) => res.json()
  );
}

export async function editTask({
  id,
  title,
  description,
}: Pick<Task, "id" | "title" | "description">): Promise<Task> {
  const data = new FormData();
  data.append("title", title);
  data.append("description", description);
  return fetch(`${apiUrl}/api/tasks/${id}`, { method: "PUT", body: data }).then(
    (res) => res.json()
  );
}

export async function getTask(id: Task["id"]): Promise<Task | null> {
  return fetch(`${apiUrl}/api/tasks/${id}`).then((res) => res.json());
}

export async function deleteTask(id: Task["id"]): Promise<boolean> {
  return fetch(`${apiUrl}/api/tasks/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
}

export async function validateTask(id: Task["id"]): Promise<Task> {
  return fetch(`${apiUrl}/api/tasks/${id}/validate`, { method: "POST" }).then(
    (res) => res.json()
  );
}

export async function getTasksToValidate(): Promise<Task[]> {
  return fetch(`${apiUrl}/api/tasks/to-validate`).then((res) => res.json());
}

export async function getNumberOfTasksToValidate(): Promise<number> {
  return fetch(`${apiUrl}/api/tasks/to-validate/length`).then((res) =>
    res.json()
  );
}
