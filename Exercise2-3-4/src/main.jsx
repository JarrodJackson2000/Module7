import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";
import theme from "./CustomTheme";
import { ThemeProvider } from "@emotion/react";
import { UserProvider } from "./UserContext.jsx";
import NavBar from "./Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavBar></NavBar>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
