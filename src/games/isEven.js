import setGame from '../index.js';

const QUESTION_TITLE = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkIfEven = (input) => (input % 2 === 0 ? 'yes' : 'no');
const getRandomNumber = () => Math.floor(Math.random() * 101);

const isEven = () => {
  setGame(QUESTION_TITLE, getRandomNumber, checkIfEven);
};

export default isEven;
