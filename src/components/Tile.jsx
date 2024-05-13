import React, { useContext, useEffect } from "react";
import { useGame } from "../context/GameStateProvider";
import { generateRandomSequence } from "../utils/utils";
import { useUI } from "../context/UIStateProvider";

export const Tile = ({ id, index, handleTileClick, tileColor }) => {
  const {
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
  const { setIsTileFlashing } = useUI();

  function handleNextRound() {
    console.log("Handling next round");

    const newSequence = generateRandomSequence(
      sequenceLength + 1,
      numberOfTiles + 1
    );

    setNumberOfTiles((prevNumTiles) => prevNumTiles + 1);
    setSequenceLength((prevSeqLength) => prevSeqLength + 1);
    setCurrentSequence(newSequence);
    setSequenceIndex(0);
    setIsTileFlashing(true);
  }

  function handleTileClick() {
    if (index === currentSequence[sequenceIndex]) {
      console.log("You clicked tile:", index + 1 + " Correct!");
      setScore((prevScore) => prevScore + 1);

      // if we clicked the last tile in the sequence, go next
      if (sequenceIndex === currentSequence.length - 1) {
        handleNextRound();
      } else {
        setSequenceIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      console.log("You clicked tile:", index + 1 + " Wrong!");
      setIsGameOver(true);
    }
  }

  return (
    <div
      key={id}
      className={"tile"}
      style={tileColor}
      onClick={handleTileClick}
    ></div>
  );
};
