import { useGame } from "../context/GameStateProvider";
import { useUI } from "../context/UIStateProvider";
import { generateRandomSequence } from "../utils/utils";
import {
  STARTING_MATRIX_SIZE,
  STARTING_SEQUENCE_LENGTH,
} from "../utils/consts";

export const PlayBtn = () => {
  const {
    setCurrentSequence,
    setNumberOfTiles,
    isGameOver,
    setIsGameOver,
    setScore,
    setSequenceLength,
  } = useGame();
  const { setIsTileFlashing } = useUI();

  function handlePlay() {
    // TODO: Initialize starting values better
    setSequenceLength(STARTING_SEQUENCE_LENGTH);
    setNumberOfTiles(STARTING_MATRIX_SIZE);
    setCurrentSequence(
      generateRandomSequence(STARTING_SEQUENCE_LENGTH, STARTING_MATRIX_SIZE)
    );
    setScore(0);
    setIsGameOver(false);
    setIsTileFlashing(true);
  }

  return (
    <div className="play-btn" onClick={handlePlay}>
      Play
    </div>
  );
};
