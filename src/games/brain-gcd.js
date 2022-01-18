import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const GAME_TASK = 'Find the greatest common divisor of given numbers.';
const numberMaxVal = 100;
const numberMinVal = 1;

const calculateGCD = (x, y) => {
  if (x === y) {
    return x;
  }
  const iter = (val1, val2) => {
    const max = Math.max(val1, val2);
    const min = Math.min(val1, val2);
    if (max % min === 0) {
      return min;
    }
    const newVal = max % min;
    return iter(newVal, min);
  };
  return iter(x, y);
};

const setGameParams = () => {
  const leftOperand = getRandomNumber(numberMinVal, numberMaxVal);
  const rightOperand = getRandomNumber(numberMinVal, numberMaxVal);

  const questionVal = `${leftOperand} ${rightOperand}`;
  const correctVal = calculateGCD(leftOperand, rightOperand);

  return { questionVal, correctVal: correctVal.toString() };
};

const playBrainGcd = () => {
  setGame(GAME_TASK, setGameParams);
};

export default playBrainGcd;
