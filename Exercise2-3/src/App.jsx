import "./App.css";
import BitcoinRates from "./BitcoinRates";
import MyMoodProvider from "./CurrentMood";

function App() {
  return (
    <>
      <MyMoodProvider>
        <BitcoinRates></BitcoinRates>
      </MyMoodProvider>
    </>
  );
}

export default App;
