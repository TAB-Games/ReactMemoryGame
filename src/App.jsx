import React, { useState, useEffect } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import { PlayBtn } from "./components/PlayBtn";
import Score from "./components/Score";
import { generateRandomSequence } from "./utils/utils";

import GameProvider from "./context/GameProvider";

function App() {
  return (
    <div>
      <h1>Memorization Station</h1>
      <GameProvider>
        <Score />
        <GameBoard />
        <PlayBtn />
      </GameProvider>
    </div>
  );
}

export default App;
