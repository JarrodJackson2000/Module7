import { useState, createContext } from "react";

export const MyMoodContext = createContext({ mood: true });

export default function MyMoodProvider(props) {
  const [happy, setHappy] = useState(true);

  return (
    <MyMoodContext.Provider value={{ happy, setHappy }}>
      {props.children}
    </MyMoodContext.Provider>
  );
}
