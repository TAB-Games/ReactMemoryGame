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

  return <div key={key} className="tile" style={tileColor}></div>;
};
