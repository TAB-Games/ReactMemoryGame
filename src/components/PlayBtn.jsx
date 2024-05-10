import { useGame } from "../context/GameStateProvider";
import { generateRandomSequence } from "../utils/utils";

export const PlayBtn = () => {
  const { setCurrentSequence } = useGame();

  function handlePlay() {
    setCurrentSequence(generateRandomSequence(2, 2));
  }

  return (
    <div className="play-btn" onClick={handlePlay}>
      Play
    </div>
  );
};
