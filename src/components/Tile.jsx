export const Tile = (key, index, isFlashing) => {
  function handleTileClick() {
    // check if it is correct tile in array sequence
    // need to compare with global state ...redux toolkit ?
    return "eggs";
  }
  isFlashing = false;

  return (
    <div key={key} className={`tile ${isFlashing ? "flashing" : ""}`}></div>
  );
};
