import React from "react";
import { Routes, Route } from "react-router-dom";
import BitcoinRates from "../BitcoinRates";
import SimpleCalculator from "../SimpleCalculator";
import BigCats from "../BigCats";
import Home from "../Home";
import PostList from "../PostList";
import LoginPage from "../LoginPage";
import { MyMoodProvider } from "../CurrentMood";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route
        path="bitcoinRates"
        element={
          <MyMoodProvider>
            <BitcoinRates></BitcoinRates>
          </MyMoodProvider>
        }
      />
      <Route
        path="calculator"
        element={<SimpleCalculator></SimpleCalculator>}
      />
      <Route path="bigcats" element={<BigCats></BigCats>} />
      <Route path="posts" element={<PostList></PostList>}></Route>
      <Route path="login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
}

export default AppRoutes;
