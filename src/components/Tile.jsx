import React, { useContext, useEffect } from "react";
import { Howl, Howler } from "howler";
import { useGame } from "../context/GameStateProvider";
import { generateRandomSequence } from "../utils/utils";
import { useUI } from "../context/UIStateProvider";
import correct_12 from "./../assets/audio-sfx/correct_12.mp3";
import wrong_01 from "./../assets/audio-sfx/wrong_01.mp3";
import { playCorrect, playWrong } from "../utils/audio";

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
      setSequenceLength(numberOfTiles + 1);

      newSequence = generateRandomSequence(
        numberOfTiles + 1,
        numberOfTiles + 1
      );

      setNumberOfTiles((prevNumTiles) => prevNumTiles + 1);
      // otherwise increase sequence length only
    } else {
      newSequence = generateRandomSequence(sequenceLength + 1, numberOfTiles);
      setSequenceLength((prevSeqLength) => prevSeqLength + 1);
    }

    setCurrentSequence(newSequence);
    setSequenceIndex(0);
    setIsTileFlashing(true);
  }

  function handleTileClick() {
    // TODO: make an audio mute button

    if (index === currentSequence[sequenceIndex]) {
      playCorrect(index, numberOfTiles);

      setScore((prevScore) => prevScore + 1);

      // if we clicked the last tile in the sequence, go next
      if (sequenceIndex === currentSequence.length - 1) {
        incrementSequence();
      } else {
        setSequenceIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      try {
        playWrong();
        console.log("You clicked tile:", index + 1 + " Wrong!");
        setIsGameOver(true);
      } catch (err) {
        console.error("Failure finding wrong tile audio");
      }
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
