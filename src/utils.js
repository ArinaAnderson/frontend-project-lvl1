export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const generateGameParams = (option, correctVal) => ({
  option,
  correctVal: correctVal.toString(10),
});
