import React, { useContext, useEffect } from "react";
import { useGame } from "../context/GameStateProvider";

export const Tile = ({
  key,
  index,
  handleTileClick,
  isFlashing,
  tileColor,
}) => {
  const { currentSequence, sequenceIndex } = useGame();

  // const [flashing, setFlashing] = useState(false);

  // useEffect(() => {
  //   setFlashing(isFlashing);
  // }, [isFlashing]);

  function handleTileClick() {
    // check if it is correct tile in array sequence
    // need to compare with global state ...redux toolkit ? or useContext
    console.log("You clicked tile:", index);
    if (index === currentSequence[sequenceIndex]) {
      console.log("correct!");
    } else {
      console.log("wronggg");
    }
  }

  // useEffect(() => {
  //   // Update the gradient colors on component mount
  //   gradient.update();
  // }, [gradient]);

  console.log(tileColor);
  return <div key={key} className="tile" style={tileColor}></div>;
};
