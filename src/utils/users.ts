import { apiUrl } from "./config";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  active: boolean;
  canValidate: boolean;
};

export async function getCurrentUser(): Promise<User> {
  return fetch(`${apiUrl}/api/users/current`, {
    headers: { Origin: apiUrl },
  }).then((res) => res.json());
}
