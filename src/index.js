import readlineSync from 'readline-sync';

import greet from './greet.js';

const roundTotalNum = 3;

const setGameParams = (setGameParamsCallback) => setGameParamsCallback();
const checkRespond = (correctVal, respond) => correctVal === respond;
const formQuestion = (option) => `Question: ${option}`;

const getRespond = () => {
  const respond = readlineSync.question('Your answer: ');
  return respond;
};

const setGame = (title, setGameParamsCallback) => {
  console.log('LAST CHECK');
  let roundCount = 0;
  const gamer = greet();
  console.log(title);
  while (roundCount < roundTotalNum) {
    const gameGenerators = setGameParams(setGameParamsCallback);
    const option = gameGenerators.generateOption();
    const correctVal = gameGenerators.generateCorrectResult(option);
    const question = formQuestion(option);
    console.log(question);
    const respond = getRespond();
    const isCorrect = checkRespond(typeof correctVal === 'string' ? correctVal : correctVal.toString(10), respond);
    if (isCorrect) {
      roundCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${respond}' is wrong answer ;(. Correct answer was '${correctVal}'.\nLet's try again, ${gamer}!`);
      return;
    }
  }
  console.log(`Congratulations, ${gamer}!`);
};

export default setGame;
