import React from "react";
import { Routes, Route } from "react-router-dom";
import BitcoinRates from "../BitcoinRates";
import SimpleCalculator from "../SimpleCalculator";
import BigCats from "../BigCats";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<BitcoinRates></BitcoinRates>} />
      <Route
        path="calculator"
        element={<SimpleCalculator></SimpleCalculator>}
      />
      <Route path="bigcats" element={<BigCats></BigCats>} />
    </Routes>
  );
}

export default AppRoutes;
