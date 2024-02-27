import React from "react";
import { Context, createContext } from "react";

const styleThemeContext = createContext("light");

const ThemeContext = ({ children }: { children: JSX.Element }) => {
  return (
    <styleThemeContext.Provider value="light">
      {children}
    </styleThemeContext.Provider>
  );
};
export default ThemeContext;
