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

  React.useEffect(() => {
    // Delay 3 seconds before showing ads
    let timer = setTimeout(async () => {
      try {
        // Get Ad Element
        const autoAdScript = document.querySelector("#googleAdSenseScript");

        // Remove "data-nscript"  script to avoid AdSense Warnings
        autoAdScript?.removeAttribute("data-nscript");

        // Add Script to initialize ads
        autoAdScript?.setAttribute(
          "src",
          `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8849438768625360`
        );
      } catch (err) {
        console.error(err);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
