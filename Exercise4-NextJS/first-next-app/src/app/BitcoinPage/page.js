import BitcoinRates from "./BitcoinRates";
import { MyMoodProvider } from "@/Components/CurrentMood";

export default function BitcoinRatesPage() {
  return (
    <MyMoodProvider>
      <BitcoinRates></BitcoinRates>
    </MyMoodProvider>
  );
}
