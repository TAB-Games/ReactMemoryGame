import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { PlayBtn } from "./components/PlayBtn";
import Score from "./components/Score";

function App() {
  let numTiles = 2;
  let score = 0;
  return (
    <div>
      <Score value={score} />
      <GameBoard numTiles={numTiles} />
      <PlayBtn />
    </div>
  );
}

export default App;
