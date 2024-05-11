import React, { createContext, useContext, useState } from "react";

// Create a context for the game state
const UIContext = createContext();

// Use to control flashing and clicking
export const UIStateProvider = ({ children }) => {
  const [isTileFlashing, setIsTileFlashing] = useState(false);
  const [isTileClickEnabled, setIsTileClickEnabled] = useState(false);
  const [isPlayBtnEnabled, setIsPlayBtnEnabled] = useState(true); // probably unnecessary actually

  return <UIContext.Provider value={{}}>{children}</UIContext.Provider>;
};

export const useGame = () => useContext(UIContext);
