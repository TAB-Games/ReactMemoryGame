import React, { createContext, useContext, useState } from "react";

const CurrentSequenceContext = createContext();

export const CurrentSequenceProvider = ({ children }) => {
  const [currentSequence, setCurrentSequence] = useState([]);

  return (
    <CurrentSequenceContext.Provider
      value={{ currentSequence, setCurrentSequence }}
    >
      {children}
    </CurrentSequenceContext.Provider>
  );
};

export const useCurrentSequence = () => useContext(CurrentSequenceContext);
