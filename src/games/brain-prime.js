import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const QUESTION_TITLE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const setGameParams = () => {
  console.log('MARMUUU');
  const option = getRandomNumber(1, 100);
  const correctVal = isPrime(option) ? 'yes' : 'no';

  return {
    option,
    correctVal,
  };
};

const playBrainPrime = () => {
  setGame(QUESTION_TITLE, setGameParams);
};

export default playBrainPrime;
