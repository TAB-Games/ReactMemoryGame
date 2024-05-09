import React, { useEffect } from "react";

export const Tile = ({ key, index, isFlashing, tileColor }) => {
  function handleTileClick() {
    // check if it is correct tile in array sequence
    // need to compare with global state ...redux toolkit ?
    return "eggs";
  }

  return <div key={key} className="tile" style={tileColor}></div>;
};
