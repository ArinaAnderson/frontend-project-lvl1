import setGame from '../index.js';

import { getRandomNumber, generateGameParams } from '../utils.js';

const GAME_TASK = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberMaxVal = 100;
const numberMinVal = 0;

const setGameParams = () => {
  const option = getRandomNumber(numberMinVal, numberMaxVal);
  const correctVal = option % 2 === 0 ? 'yes' : 'no';

  return generateGameParams(option, correctVal);
};

const playBrainEven = () => {
  setGame(GAME_TASK, setGameParams);
};

export default playBrainEven;
