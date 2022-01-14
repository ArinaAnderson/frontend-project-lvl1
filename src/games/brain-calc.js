import setGame from '../index.js';

import { getRandomNumber, generateGameParams } from '../utils.js';

const GAME_TASK = 'What is the result of the expression?';
const numberMaxVal = 100;
const numberMinVal = 0;
const inputParams = {
  operatorFuncs: {
    add(arg1, arg2) {
      return arg1 + arg2;
    },
    subst(arg1, arg2) {
      return arg1 - arg2;
    },
    multiply(arg1, arg2) {
      return arg1 * arg2;
    },
  },
  operators: ['add', 'subst', 'multiply'],
  operatorToSymbs: {
    add: '+',
    subst: '-',
    multiply: '*',
  },
};

const { operatorFuncs, operators, operatorToSymbs } = inputParams;

const setGameParams = () => {
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const leftOperand = getRandomNumber(numberMinVal, numberMaxVal);
  const rightOperand = getRandomNumber(numberMinVal, numberMaxVal);
  const operatorSymb = operatorToSymbs[operator];
  const questionVal = `${leftOperand} ${operatorSymb} ${rightOperand}`;
  const correctVal = operatorFuncs[operator](leftOperand, rightOperand);

  return generateGameParams(questionVal, correctVal);
};

const playBrainCalc = () => {
  setGame(GAME_TASK, setGameParams);
};

export default playBrainCalc;
