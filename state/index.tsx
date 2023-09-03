"use client";
import React, { createContext, useContext, useState } from "react";

type ContextType = {
  mixedWords: string[];
  unScrambledWords: Record<string, string[]>;
  unScrambledWord: string;
  setState: React.Dispatch<React.SetStateAction<ContextType>>;
};

const initState: ContextType = {
  mixedWords: [],
  unScrambledWords: {},
  unScrambledWord: "",
  setState: () => {},
};
const GlobalContext = createContext<ContextType>(initState);

export const useGlobalState = () => useContext(GlobalContext);

const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<ContextType>(initState);

  return (
    <GlobalContext.Provider value={{ ...state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
