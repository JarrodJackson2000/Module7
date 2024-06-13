import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserEmail } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        <form>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
