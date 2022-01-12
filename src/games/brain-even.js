import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const QUESTION_TITLE = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberMaxVal = 100;
const numberMinVal = 0;

const setGameParams = () => {
  const option = getRandomNumber(numberMinVal, numberMaxVal);
  const correctVal = option % 2 === 0 ? 'yes' : 'no';

  return {
    option,
    correctVal: correctVal.toString(10),
  };
};

const playBrainEven = () => {
  setGame(QUESTION_TITLE, setGameParams);
};

export default playBrainEven;
