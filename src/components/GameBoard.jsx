import React, { useState, useEffect } from "react";

import { Tile } from "./Tile";
import { generateRandomId } from "../utils/utils";
import { useCurrentSequence } from "./CurrentSequenceContext";
import { generateRandomSequence } from "../utils/utils";

function GameBoard() {
  const { currentSequence, setCurrentSequence } = useCurrentSequence();
  const [userInput, setUserInput] = useState([]); // keeps track of what user types
  const [score, setScore] = useState(0); // score starts at 0
  const [sequenceLength, setSequenceLength] = useState(2); // sequence starts at 2
  const [numTiles, setNumTiles] = useState(4);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    // Logic to generate random flashing sequence for current level
    // Update flashingTiles state accordingly
  }, [level]);

  const handleTileClick = (clickedIndex) => {
    // Logic to handle user input when clicking on a tile
    // Update userInput state accordingly
  };

  function createTiles() {
    let tileArr = [];
    for (let i = 0; i < numTiles; i++) {
      let id = generateRandomId();

      tileArr.push(<Tile key={id} index={i} isFlashing={true} />);
    }
    return tileArr;
  }

  return <div className="container">{createTiles()}</div>;
}

export default GameBoard;
