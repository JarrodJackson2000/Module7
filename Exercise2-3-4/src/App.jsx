import React, { useState } from "react";
import { LoginProvider } from "./UserContext";

import AppRoutes from "./Routes/AppRoutes";
import NavBar from "./Navbar";

function App() {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <LoginProvider value={{ userEmail, setUserEmail }}>
      <NavBar></NavBar>
      <AppRoutes />
    </LoginProvider>
  );
}

export default App;
