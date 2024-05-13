import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import TitleHeader from "./components/TitleHeader";

import GameBoard from "./components/GameBoard";
import { PlayBtn } from "./components/PlayBtn";
import Score from "./components/Score";
import { generateRandomSequence } from "./utils/utils";

import { GameStateProvider } from "./context/GameStateProvider";
import Leaderboard from "./components/Leaderboard";
import { UIStateProvider } from "./context/UIStateProvider";

function App() {
  return (
    <>
      <UIStateProvider>
        <GameStateProvider>
          <TitleHeader />
          <Score />
          <GameBoard />
          <PlayBtn />
        </GameStateProvider>
      </UIStateProvider>
    </>
  );
}

export default App;
