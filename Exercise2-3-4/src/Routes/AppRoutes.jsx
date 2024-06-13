import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import BitcoinRates from "../BitcoinRates";
import SimpleCalculator from "../SimpleCalculator";
import BigCats from "../BigCats";
import Home from "../Home";
import PostList from "../PostList";
import LoginPage from "../LoginPage";
import { MyMoodProvider } from "../CurrentMood";
import { LoginContext } from "../UserContext"; // Import LoginContext from UserContext

function AppRoutes() {
  const { isLoggedIn } = React.useContext(LoginContext); // Use LoginContext instead of LoginProvider

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "login", element: <LoginPage /> },
    {
      path: "bitcoinRates",
      element: isLoggedIn ? (
        <MyMoodProvider>
          <BitcoinRates />
        </MyMoodProvider>
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "calculator",
      element: isLoggedIn ? <SimpleCalculator /> : <Navigate to="/login" />,
    },
    {
      path: "bigcats",
      element: isLoggedIn ? <BigCats /> : <Navigate to="/login" />,
    },
    {
      path: "posts",
      element: isLoggedIn ? <PostList /> : <Navigate to="/login" />,
    },
  ]);

  return element;
}

export default AppRoutes;
