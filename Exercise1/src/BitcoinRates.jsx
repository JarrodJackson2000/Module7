import { useState } from "react";
import { useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [currentPrice, setCurrentPrice] = useState("Price");

  useEffect(() => {
    let ignore = false;
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          setCurrentPrice(response.bitcoin[currency]);
        }
      });

    return () => {
      ignore = true;
      console.log("Cleanup Activated");
    };
  }, [currency]);
  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  console.log(currentPrice);
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
        Current Price in {currency}: ${currentPrice}
      </label>
    </div>
  );
}

export default BitcoinRates;
