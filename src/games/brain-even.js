import setGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const QUESTION_TITLE = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberMaxVal = 100;
const numberMinVal = 0;

const getCorrectResult = (input) => (input % 2 === 0 ? 'yes' : 'no');
const getOption = () => getRandomNumber(numberMinVal, numberMaxVal);

const playBrainEven = () => {
  setGame(QUESTION_TITLE, getOption, getCorrectResult);
};

export default playBrainEven;
