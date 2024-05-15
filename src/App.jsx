import React, { useState, useEffect, useContext } from "react";

import TitleHeader from "./components/TitleHeader";

import "./App.css";
import GameBoard from "./components/GameBoard";
import { PlayBtn } from "./components/PlayBtn";
import Score from "./components/Score";

import { GameStateProvider } from "./context/GameStateProvider";
import { UIStateProvider } from "./context/UIStateProvider";

function App() {
  return (
    <>
      <UIStateProvider>
        <GameStateProvider>
          <TitleHeader />
          <GameBoard />
          <div className="bottom-bar">
            <PlayBtn />
            <Score />
          </div>
        </GameStateProvider>
      </UIStateProvider>
    </>
  );
}

export default App;
