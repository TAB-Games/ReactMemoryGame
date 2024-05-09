import React, { useEffect } from "react";

export const Tile = ({ key, index, isFlashing, tileColor }) => {
  // const [flashing, setFlashing] = useState(false);

  // useEffect(() => {
  //   setFlashing(isFlashing);
  // }, [isFlashing]);

  function handleTileClick() {
    // check if it is correct tile in array sequence
    // need to compare with global state ...redux toolkit ? or useContext

    return "eggs";
  }

  // useEffect(() => {
  //   // Update the gradient colors on component mount
  //   gradient.update();
  // }, [gradient]);

  console.log(tileColor);
  return <div key={key} className="tile" style={tileColor}></div>;
};
