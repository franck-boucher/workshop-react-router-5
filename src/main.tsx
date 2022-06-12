import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SideMenuContextProvider } from "./contexts/SideMenuContext";
import { UserContextProvider } from "./contexts/UserContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <SideMenuContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SideMenuContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
