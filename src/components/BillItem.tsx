import { Paper, Skeleton, Text } from "@mantine/core";
import { Bill } from "../utils/bills";

type BillItemProps = {
  bill: Bill;
};

export default function BillItem({ bill }: BillItemProps) {
  return (
    <Paper
      p="sm"
      withBorder
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Text>id: {bill.id}</Text>
      <Text>month: {bill.month}</Text>
      <Text>year: {bill.year}</Text>
      <Text>amount: {bill.amount}</Text>
    </Paper>
  );
}

export function BillItemSkeleton() {
  return (
    <Paper
      p="sm"
      withBorder
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Skeleton visible>
        <Text>Lorem ipsum dolor sit amet</Text>
      </Skeleton>
    </Paper>
  );
}
