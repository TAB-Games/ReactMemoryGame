export const generateRandomId = () => {
  return Math.random().toString(36).slice(2, 11);
};

export const generateRandomSequence = (lengthOfSequence) => {
  currentSequence = [];
  for (let i = 0; i < lengthOfSequence; i++) {
    currentSequence.push(Math.floor(Math.random() * numberOfTiles));
  }
  return currentSequence;
};
