import React, { useState } from "react";
import useFetchData from "./FetchBitcoinRates";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { data, loading, error } = useFetchData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  const currentPrice = data ? data.bitcoin[currency.toLowerCase()] : "Price";

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <label>
        Current Price in {currency}: ${loading ? "Loading..." : currentPrice}
      </label>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default BitcoinRates;
