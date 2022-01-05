import readlineSync from 'readline-sync';

import greet from './greet.js';

const correctAnswersNum = 3;
let correctAnswersCount = 0;

const getOption = (getOptionCallback) => getOptionCallback();
const getCorrectResult = (getCorrectResCallback, input) => getCorrectResCallback(input);
const checkRespond = (correctVal, respond) => correctVal == respond;
const formQuestion = (option) => `Question ${option}`;
const formFeedback = (correctVal, respond, gamer) => {
  const isCorrect = checkRespond(correctVal, respond);
  if (isCorrect) {
    return 'Correct!';
  }
  return `'${respond}' is wrong answer ;(. Correct answer was '${correctVal}'.\nLet's try again, ${gamer}!`;
};

const getRespond = () => {
  const respond = readlineSync.question('Your answer: ');
  return respond;
};

const setGame = (title, getOptionCallback, getCorrectResCallback) => {
  const gamer = greet();
  console.log(title);
  while (correctAnswersCount < correctAnswersNum) {
    const input = getOption(getOptionCallback);
    const question = formQuestion(input);
    console.log(question);
    const respond = getRespond();
    const feedback = formFeedback(getCorrectResult(getCorrectResCallback, input), respond, gamer);
    console.log(feedback);

    if (feedback === 'Correct!') {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${gamer}!`);
};

export default setGame;
