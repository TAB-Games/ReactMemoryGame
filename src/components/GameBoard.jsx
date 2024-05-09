import React, { useState, useEffect } from "react";

import { Tile } from "./Tile";
import { generateRandomId } from "../utils/utils";
import { useGame } from "../context/GameProvider";
import Gradient from "../models/Gradient";

function GameBoard() {
  const { numberOfTiles } = useGame();
  const [userInput, setUserInput] = useState([]); // keeps track of what user types
  const { currentSequence } = useGame();
  const [tileArr, setTileArr] = useState([]);

  let gradient = new Gradient();

  useEffect(() => {
    createTiles();
  }, [numberOfTiles]); // Regenerate tiles whenever numberOfTiles changes

  const handleTileClick = (clickedIndex) => {
    // Logic to handle user input when clicking on a tile
    // Update userInput state accordingly
  };

  function createTiles() {
    let newTileArr = [];
    for (let i = 0; i < numberOfTiles; i++) {
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

  return <div className="container">{tileArr}</div>;
}

export default GameBoard;
