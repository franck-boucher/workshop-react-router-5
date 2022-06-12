import { Paper, PaperProps, Text } from "@mantine/core";
import { Bill } from "../utils/bills";

type BillItemProps = PaperProps<"div"> & {
  bill: Bill;
};

export default function BillItem({ bill, ...props }: BillItemProps) {
  return (
    <Paper
      p="sm"
      withBorder
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
      {...props}
    >
      <Text>id: {bill.id}</Text>
      <Text>month: {bill.month}</Text>
      <Text>year: {bill.year}</Text>
      <Text>amount: {bill.amount}</Text>
    </Paper>
  );
}
