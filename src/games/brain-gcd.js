import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const QUESTION_TITLE = 'Find the greatest common divisor of given numbers.';
const numberMaxVal = 100;
const numberMinVal = 1;

const calculateGCD = (x, y) => {
  if (x === y) {
    return x;
  }
  const iter = (val1, val2) => {
    if (val1 === 1 || val2 === 1) {
      return 1;
    }
    const max = val1 > val2 ? val1 : val2;
    const min = val1 > val2 ? val2 : val1;
    if (max % min === 0) {
      return min;
    }
    const newVal = max % min;
    return iter(newVal, min);
  };
  return iter(x, y);
};

const setGameParams = () => {
  const inputs = [];
  inputs[0] = getRandomNumber(numberMinVal, numberMaxVal);
  inputs[1] = getRandomNumber(numberMinVal, numberMaxVal);
  const option = `${inputs[0]} ${inputs[1]}`;
  const correctVal = calculateGCD(inputs[0], inputs[1]);

  return {
    option,
    correctVal: correctVal.toString(10),
  };
};
const playBrainGcd = () => {
  setGame(QUESTION_TITLE, setGameParams);
};

export default playBrainGcd;
