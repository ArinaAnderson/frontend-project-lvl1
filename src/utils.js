export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const generateGameParams = (questionVal, correctVal) => ({
  questionVal,
  correctVal: correctVal.toString(10),
});
