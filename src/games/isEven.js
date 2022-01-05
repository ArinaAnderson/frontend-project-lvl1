import setGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const QUESTION_TITLE = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectResult = (input) => (input % 2 === 0 ? 'yes' : 'no');
const getOption = () => getRandomNumber(0, 100);

const isEven = () => {
  setGame(QUESTION_TITLE, getOption, getCorrectResult);
};

export default isEven;
