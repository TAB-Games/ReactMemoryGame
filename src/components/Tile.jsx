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

  function incrementSequence() {
    let newSequence;
    let numTiles = numberOfTiles * numberOfTiles;

    // end is reached, generate more tiles
    if (sequenceLength >= Math.ceil(numTiles / 2)) {
      console.log("if", numberOfTiles);
      setSequenceLength(numberOfTiles + 1);

      newSequence = generateRandomSequence(
        numberOfTiles + 1,
        numberOfTiles + 1
      );

      setNumberOfTiles((prevNumTiles) => prevNumTiles + 1);
      // otherwise increase sequence length only
    } else {
      console.log("else");
      newSequence = generateRandomSequence(sequenceLength + 1, numberOfTiles);
      setSequenceLength((prevSeqLength) => prevSeqLength + 1);
    }

    setCurrentSequence(newSequence);
    setSequenceIndex(0);
    setIsTileFlashing(true);
  }

  function handleTileClick() {
    if (index === currentSequence[sequenceIndex]) {
      setScore((prevScore) => prevScore + 1);

      // if we clicked the last tile in the sequence, go next
      if (sequenceIndex === currentSequence.length - 1) {
        incrementSequence();
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
