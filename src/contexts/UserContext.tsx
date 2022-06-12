import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { getCurrentUser, User } from "../utils/users";

type UserContextType = {
  user: User | null;
  fetchUser: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = useCallback(async () => {
    const user = await getCurrentUser();
    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
