import readlineSync from 'readline-sync';

import greet from './greet.js';

const roundTotalNum = 3;

const setGameParams = (setGameParamsCallback) => setGameParamsCallback();
const checkRespond = (correctVal, respond) => correctVal === respond;
const formQuestion = (option) => `Question: ${option}`;

const getRespond = () => {
  const respond = readlineSync.question('Your answer: ');
  console.log(typeof respond);
  return Number.isNaN(parseInt(respond, 10)) ? respond : parseInt(respond, 10);
};

const setGame = (title, setGameParamsCallback) => {
  let roundCount = 0;
  const gamer = greet();
  console.log(title);
  while (roundCount < roundTotalNum) {
    const gameParams = setGameParams(setGameParamsCallback);
    const { option, correctVal } = gameParams;
    const question = formQuestion(option);
    console.log(question);
    const respond = getRespond();

    const isCorrect = checkRespond(correctVal, respond);
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
