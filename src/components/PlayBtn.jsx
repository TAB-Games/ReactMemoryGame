import { useGame } from "../context/GameStateProvider";
import { useUI } from "../context/UIStateProvider";
import { generateRandomSequence } from "../utils/utils";

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
    // Initialize starting values
    setSequenceLength(2);
    setNumberOfTiles(2);
    setCurrentSequence(generateRandomSequence(2, 2));
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
