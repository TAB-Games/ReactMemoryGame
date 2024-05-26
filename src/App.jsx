import React, { useState, useEffect, useContext } from "react";

import TitleHeader from "./components/TitleHeader";

import "./App.css";
import GameBoard from "./components/GameBoard";

import { GameStateProvider } from "./context/GameStateProvider";
import { UIStateProvider } from "./context/UIStateProvider";
import AudioSynthesizer from "./components/AudioSynthesizer.jsx";
import Container from "./components/Container.jsx";

function App() {
  return (
    <>
      <UIStateProvider>
        <GameStateProvider>
          <Container>
            <AudioSynthesizer />
            <TitleHeader />
            <GameBoard />
          </Container>
        </GameStateProvider>
      </UIStateProvider>
    </>
  );
}

export default App;
