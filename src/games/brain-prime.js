import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const GAME_TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (num) => {
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
  const randomNumber = getRandomNumber(1, 100);
  const correctVal = isNumberPrime(randomNumber) ? 'yes' : 'no';

  return { questionVal: randomNumber, correctVal };
};

const playBrainPrime = () => {
  setGame(GAME_TASK, setGameParams);
};

export default playBrainPrime;
