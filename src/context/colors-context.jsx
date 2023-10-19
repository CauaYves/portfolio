import React, { createContext, useContext, useState } from "react";
import { COLORS, DARK_MODE_COLORS } from "@/constants/colors";

const ColorsContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const colors = darkMode ? DARK_MODE_COLORS : COLORS;

  return (
    <ColorsContext.Provider value={{ darkMode, setDarkMode, colors }}>
      {children}
    </ColorsContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(ColorsContext);
}
