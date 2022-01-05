import setGame from '../index.js';

import { getRandomNumber, shuffleArray } from '../utils.js';

const QUESTION_TITLE = 'What is the result of the expression?';
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
};

const input = {
  operands: [],
  operator: null,
};

const { operatorFuncs, operators } = inputParams;
const { operands } = input;

function getOption() {
  const maxVal = operators.length - 1;
  const minVal = 0;
  input.operator = shuffleArray(operators)[getRandomNumber(minVal, maxVal)];
  operands[0] = getRandomNumber(numberMinVal, numberMaxVal);
  operands[1] = getRandomNumber(numberMinVal, numberMaxVal);

  const operatorToSymbs = {
    add: '+',
    subst: '-',
    multiply: '*',
  };
  const operatorSymb = operatorToSymbs[input.operator];
  return `${operands[0]} ${operatorSymb} ${operands[1]}`;
}

const getCorrectResult = () => operatorFuncs[input.operator](operands[0], operands[1]);

const calc = () => {
  setGame(QUESTION_TITLE, getOption, getCorrectResult);
};

export default calc;
