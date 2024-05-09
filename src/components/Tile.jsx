import generateRandomId from "../utils/utils";

export const Tile = () => {
  let id = generateRandomId();
  return <div className="tile" key={id}></div>;
};
