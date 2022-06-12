import { ActionIcon, Group, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import BillItem from "../components/BillItem";
import Page from "../components/Page";
import { Bill, getBillsForYear } from "../utils/bills";

export default function Bills() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    getBillsForYear(year).then((bills) => setBills(bills));
  }, [year]);

  const plusOne = () => setYear(year + 1);
  const minusOne = () => setYear(year - 1);

  return (
    <Page
      title={`Bills of year ` + year}
      leftContent={
        <Group>
          <ActionIcon onClick={minusOne}>
            <ChevronLeft />
          </ActionIcon>
          <ActionIcon onClick={plusOne}>
            <ChevronRight />
          </ActionIcon>
        </Group>
      }
    >
      <Stack spacing="xs">
        {bills.map((bill) => (
          <BillItem key={bill.id} bill={bill} />
        ))}
      </Stack>
    </Page>
  );
}
