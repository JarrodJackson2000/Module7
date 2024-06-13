import { AppBar, Typography, Toolbar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";

export default function NavBar() {
  const menuItems = [
    { link: "/", text: "Home" },
    { link: "/bitcoinRates", text: "Bitcoin Exchange" },
    { link: "/calculator", text: "Calculator" },
    { link: "/bigcats", text: "Big Cats" },
    { link: "/posts", text: "Posts" },
    { link: "/login", text: "Login" },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#ffffff" }}>
        <Toolbar>
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Typography variant="h6" sx={{ color: "#000000" }}>
                  {item.text}
                </Typography>
              </NavLink>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
