import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const GAME_TASK = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberMaxVal = 100;
const numberMinVal = 0;

const isNumberEven = (num) => num % 2 === 0;

const setGameParams = () => {
  const randomNumber = getRandomNumber(numberMinVal, numberMaxVal);
  const correctVal = isNumberEven(randomNumber) ? 'yes' : 'no';

  return { questionVal: randomNumber, correctVal };
};

const playBrainEven = () => {
  setGame(GAME_TASK, setGameParams);
};

export default playBrainEven;
