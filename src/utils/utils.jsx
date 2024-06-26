export const generateRandomId = () => {
  return Math.random().toString(36).slice(2, 11);
};

export const generateRandomSequence = (lengthOfSequence, numberOfTiles) => {
  let currentSequence = [];
  for (let i = 0; i < lengthOfSequence; i++) {
    currentSequence.push(
      Math.floor(Math.random() * (numberOfTiles * numberOfTiles))
    );
  }
  console.log(
    "Current Sequence:",
    currentSequence.map((s) => s + 1)
  );
  return currentSequence;
};
