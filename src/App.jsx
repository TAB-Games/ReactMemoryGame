import React, { useState, useEffect } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import { PlayBtn } from "./components/PlayBtn";
import Score from "./components/Score";
import { generateRandomSequence } from "./utils/utils";

import { GameStateProvider } from "./context/GameStateProvider";

function App() {
  return (
    <>
      <h1>.memory something that does matter</h1>
      <GameStateProvider>
        <Score />
        <GameBoard />
        <PlayBtn />
      </GameStateProvider>
    </>
  );
}

export default App;
