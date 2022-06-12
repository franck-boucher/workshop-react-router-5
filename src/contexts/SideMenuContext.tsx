import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { getNumberOfTasksToValidate } from "../utils/tasks";

type SideMenuContextType = {
  tasksToValidate: number;
  clearTasksToValidate: () => void;
  fetchTasksToValidate: () => Promise<void>;
};

const SideMenuContext = createContext<SideMenuContextType | undefined>(
  undefined
);

export const SideMenuContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [tasksToValidate, setTasksToValidate] = useState<number>(0);

  const fetchTasksToValidate = useCallback(async () => {
    console.log("fetchTasksToValidate");
    const tasks = await getNumberOfTasksToValidate();
    setTasksToValidate(tasks);
  }, []);

  const clearTasksToValidate = useCallback(() => {
    setTasksToValidate(0);
  }, []);

  return (
    <SideMenuContext.Provider
      value={{ tasksToValidate, clearTasksToValidate, fetchTasksToValidate }}
    >
      {children}
    </SideMenuContext.Provider>
  );
};

export const useSideMenuContext = () => {
  const context = useContext(SideMenuContext);
  if (context === undefined) {
    throw new Error(
      "useSideMenuContext must be used within a SideMenuContextProvider"
    );
  }
  return context;
};
