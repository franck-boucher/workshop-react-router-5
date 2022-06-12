import { Button, ButtonProps, Center } from "@mantine/core";
import { Plus } from "tabler-icons-react";

export default function NewTaskButton(props: ButtonProps<"button">) {
  return (
    <Center sx={{ height: "100%" }}>
      <Button leftIcon={<Plus />} {...props}>
        Create a new task
      </Button>
    </Center>
  );
}
