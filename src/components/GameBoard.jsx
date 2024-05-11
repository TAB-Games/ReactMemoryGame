import React, { useState, useEffect } from "react";

import { Tile } from "./Tile";
import { generateRandomId } from "../utils/utils";
import { GameStateProvider } from "../context/GameStateProvider";
import { useGame } from "../context/GameStateProvider";
import Leaderboard from "./Leaderboard";

import Gradient from "../models/Gradient";

function GameBoard() {
  const { numberOfTiles } = useGame();
  const [userInput, setUserInput] = useState([]); // keeps track of what user types
  const { currentSequence } = useGame();
  const [tileArr, setTileArr] = useState([]);
  const { isGameOver } = useGame();

  let gradient = new Gradient();

  useEffect(() => {
    createTiles();
  }, [numberOfTiles]); // Regenerate tiles whenever numberOfTiles changes

  useEffect(() => {
    // Update the gradient colors on component mount
    gradient.update();
  }, [gradient]);

  useEffect(() => {
    // Update the CSS variable --numTiles
    document.documentElement.style.setProperty("--numTiles", numberOfTiles);
  }, [numberOfTiles]);

  function createTiles() {
    const newTileArr = [];
    for (let i = 0; i < numberOfTiles * numberOfTiles; i++) {
      let id = generateRandomId();

      let tileColor = {
        backgroundColor: `rgba(${Math.abs(gradient.red.value)}, ${Math.abs(
          gradient.blue.value
        )}, ${Math.abs(gradient.green.value)}, 0.8)`,
      };

      newTileArr.push(<Tile key={id} index={i} tileColor={tileColor} />);
      gradient.update();
    }
    setTileArr(newTileArr);
  }

  return (
    <>
      {isGameOver && <Leaderboard />}

      {!isGameOver && <div className="container">{tileArr}</div>}
    </>
  );
}

export default GameBoard;
