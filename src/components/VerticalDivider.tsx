import { Divider } from "@mantine/core";

interface VerticalDividerProps {
  margin?: number;
  minHeight?: number;
}

export default function VerticalDivider({
  margin = 1,
  minHeight = 300,
}: VerticalDividerProps) {
  return (
    <Divider
      sx={{
        borderLeft: "1px solid #ced4da",
        marginTop: `${margin}rem`,
        marginBottom: `${margin}rem`,
        minHeight: `${minHeight}px`,
      }}
    />
  );
}
