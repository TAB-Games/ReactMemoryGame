import { Tile } from "./Tile";
import { generateRandomId } from "../utils/utils";

function GameBoard({ numTiles }) {
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
