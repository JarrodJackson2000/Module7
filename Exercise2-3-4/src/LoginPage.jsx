import React, { useContext, useState, useEffect } from "react";
import { LoginContext } from "./UserContext";
import "./LoginPage.css";

const LoginComponent = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [formState, setFormState] = useState({ username: "", password: "" });

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <p>Login successful!</p>;
  }

  return (
    <form onSubmit={handleLogin} className="login-form">
      <div className="form-group">
        <label>Email: </label>
        <input
          type="email"
          id="username"
          value={formState.username}
          onChange={(e) =>
            setFormState({ ...formState, username: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginComponent;
