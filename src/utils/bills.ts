import { apiUrl } from "./config";

export type Bill = {
  id: string;
  year: number;
  month: number;
  amount: number;
};

export async function getBillsForYear(year: number): Promise<Bill[]> {
  return fetch(`${apiUrl}/api/bills/${year}`).then((res) => res.json());
}
