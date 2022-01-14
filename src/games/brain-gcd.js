import setGame from '../index.js';

import { getRandomNumber, generateGameParams } from '../utils.js';

const GAME_TASK = 'Find the greatest common divisor of given numbers.';
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
  const inputs = [
    getRandomNumber(numberMinVal, numberMaxVal),
    getRandomNumber(numberMinVal, numberMaxVal),
  ];

  const option = `${inputs[0]} ${inputs[1]}`;
  const correctVal = calculateGCD(inputs[0], inputs[1]);

  return generateGameParams(option, correctVal);
};

const playBrainGcd = () => {
  setGame(GAME_TASK, setGameParams);
};

export default playBrainGcd;
