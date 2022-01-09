import setGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const QUESTION_TITLE = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberMaxVal = 100;
const numberMinVal = 0;

const setGameParams = () => {
  const gameParams = {
    option: null,
    correctVal: null,
  };

  const generateOption = () => getRandomNumber(numberMinVal, numberMaxVal);
  const generateCorrectResult = (option) => (option % 2 === 0 ? 'yes' : 'no');
  gameParams.option = generateOption();
  gameParams.correctVal = generateCorrectResult(gameParams.option);
  return gameParams;
};

const playBrainEven = () => {
  setGame(QUESTION_TITLE, setGameParams);
};

export default playBrainEven;
