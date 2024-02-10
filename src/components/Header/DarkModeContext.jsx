import React, { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [lightDartMode, setLightDartMode] = useState(false);

  const toggleLightDartMode = () => {
    setLightDartMode(!lightDartMode);
  };

  return (
    <DarkModeContext.Provider value={{ lightDartMode, toggleLightDartMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
