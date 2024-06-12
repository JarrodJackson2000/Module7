"use client";

import { createContext, useState } from "react";

export const MyMoodContext = createContext();

export function MyMoodProvider({ children }) {
  const [happy, setHappy] = useState(true);
  return (
    <MyMoodContext.Provider value={{ happy, setHappy }}>
      {children}
    </MyMoodContext.Provider>
  );
}
