import { Tile } from "./Tile";

export const GameBoard = ({ numTiles }) => {
  function createTiles(input) {
    let tileArr = [];
    for (let i = 0; i < input * input; i++) {
      tileArr.push(<Tile />);
    }
    return tileArr;
  }

  return <div className="container">{createTiles(numTiles)}</div>;
};
