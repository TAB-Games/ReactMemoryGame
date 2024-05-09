import { useGame } from "../context/GameProvider";
import { generateRandomSequence } from "../utils/utils";

export const PlayBtn = () => {
  const { setCurrentSequence } = useGame();

  function handlePlay() {
    setCurrentSequence(generateRandomSequence(2, 4));
  }

  return (
    <div className="play-btn" onClick={handlePlay}>
      Play
    </div>
  );
};
