import React, { useState, useContext } from "react";
import { Typography } from "@mui/material";
import useFetchData from "./FetchBitcoinRates";
import { MyMoodContext } from "./CurrentMood";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const {
    data: bitcoinData,
    loading,
    error,
  } = useFetchData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  const { happy, setHappy } = useContext(MyMoodContext);

  const currentPrice =
    bitcoinData && bitcoinData.bitcoin
      ? bitcoinData.bitcoin[currency.toLowerCase()]
      : "Price";

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  const changeMood = () => {
    setHappy(!happy);
  };

  return (
    <div className="BitcoinRates">
      <Typography variant="h4">Bitcoin Exchange Rate</Typography>
      <label>
        <Typography variant="h6">Choose currency:</Typography>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <label>
        Current Price in {currency}: ${loading ? "Loading..." : currentPrice}
      </label>
      {error && <p>Error: {error.message}</p>}
      <div>Current Mood: {happy ? "\u{1F60A}" : "\u{1F622}"}</div>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
}

export default BitcoinRates;
