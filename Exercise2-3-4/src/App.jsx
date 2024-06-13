import React, { useState } from "react";
import { UserContext } from "./UserContext";
import AppRoutes from "./Routes/AppRoutes";
import NavBar from "./Navbar";

function App() {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      <NavBar></NavBar>
      <AppRoutes />
    </UserContext.Provider>
  );
}

export default App;
