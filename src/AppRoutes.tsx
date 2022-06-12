import { Route, Switch } from "react-router-dom";
import Bills from "./pages/Bills";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Validation from "./pages/Validation";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/tasks">
        <Tasks />
      </Route>
      <Route path="/validation">
        <Validation />
      </Route>
      <Route path="/bills">
        <Bills />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
