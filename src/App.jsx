import React, { useState, useEffect, useContext } from "react";

import TitleHeader from "./components/TitleHeader";

import "./App.css";
import GameBoard from "./components/GameBoard";

import { GameStateProvider } from "./context/GameStateProvider";
import { UIStateProvider } from "./context/UIStateProvider";
import AudioSynthesizer from "./components/AudioSynthesizer";

function App() {
  return (
    <>
      <UIStateProvider>
        <GameStateProvider>
          <AudioSynthesizer />
          <TitleHeader />
          <GameBoard />
        </GameStateProvider>
      </UIStateProvider>
    </>
  );
}

export default App;
