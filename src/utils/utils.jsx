const generateRandomId = () => {
  return Math.random().toString(36).slice(2, 11);
};

export default generateRandomId;
