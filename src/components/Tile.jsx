import React, { useContext, useEffect } from "react";
import { useGame } from "../context/GameStateProvider";
import { generateRandomSequence } from "../utils/utils";

export const Tile = ({
  key,
  index,
  handleTileClick,
  isFlashing,
  tileColor,
}) => {
  const {
    score,
    setScore,
    numberOfTiles,
    setNumberOfTiles,
    currentSequence,
    sequenceIndex,
    setSequenceIndex,
    setCurrentSequence,
    sequenceLength,
    setSequenceLength,
    setIsGameOver,
  } = useGame();

  function handleNextRound() {
    let newScore = score + 1;
    let newNumOfTiles = numberOfTiles + 1;
    let newSeqLength = sequenceLength + 1; // TODO: change later

    const newSequence = generateRandomSequence(newSeqLength, newNumOfTiles);

    setScore(newScore);
    setNumberOfTiles(newNumOfTiles);
    setSequenceLength(newSeqLength);
    setCurrentSequence(newSequence);
    setSequenceIndex(0);
  }

  function handleTileClick() {
    if (index === currentSequence[sequenceIndex]) {
      console.log("You clicked tile:", index + 1 + " Correct!");

      if (sequenceIndex === currentSequence.length - 1) {
        handleNextRound();
      } else {
        const newIndex = sequenceIndex + 1;
        setSequenceIndex(newIndex);
      }
    } else {
      console.log("You clicked tile:", index + 1 + " Wrong!");
      setIsGameOver(true)
    }
  }

  return (
    <div
      key={key}
      className="tile"
      style={tileColor}
      onClick={handleTileClick}
    ></div>
  );
};
