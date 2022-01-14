import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const GAME_TASK = 'What is the result of the expression?';
const numberMaxVal = 100;
const numberMinVal = 0;
const operators = ['+', '-', '*'];

const calculateResult = (val1, val2, operator) => {
  if (operator === '+') {
    return val1 + val2;
  }
  if (operator === '-') {
    return val1 - val2;
  }
  return val1 * val2;
};

const setGameParams = () => {
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const leftOperand = getRandomNumber(numberMinVal, numberMaxVal);
  const rightOperand = getRandomNumber(numberMinVal, numberMaxVal);
  const questionVal = `${leftOperand} ${operator} ${rightOperand}`;
  const correctVal = calculateResult(leftOperand, rightOperand, operator);
  return { questionVal, correctVal: correctVal.toString() };
};

const playBrainCalc = () => {
  setGame(GAME_TASK, setGameParams);
};

export default playBrainCalc;
