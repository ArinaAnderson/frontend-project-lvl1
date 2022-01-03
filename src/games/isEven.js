import readlineSync from 'readline-sync';

import greet from '../src/greet.js';

const QUESTION_TITLE = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswersNum = 3;
let correctAnswersCount = 0;

const checkIfEven = (input) => input % 2 === 0 ? 'yes' : 'no';
const getRandomNumber = () => Math.floor(Math.random() * 101);

const checkAnswer = (correctVal, respond) => correctVal === respond;
const formQuestion = (option) => `Question ${option}`;
/*const formQuestion = (option) => {
  console.log(`Question ${option}`);
}*/
/*
const formFeedback = (getCorrectAnswer, input, respond) => {
  const isCorrect = checkAnswer(getCorrectAnswer(input), respond);
  if (isCorrect) {
    return 'Correct!';
  }
  return `'${respond}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(input)}'.\nLet's try again, ${name}!`;
};
*/
const formFeedback = (correctVal, respond, gamer) => {
  const isCorrect = checkAnswer(correctVal, respond);
  if (isCorrect) {
    return 'Correct!';
    // console.log('Correct!');
  }
  return `'${respond}' is wrong answer ;(. Correct answer was '${correctVal}'.\nLet's try again, ${gamer}!`;
  // console.log(`'${respond}' is wrong answer ;(. Correct answer was '${correctVal}'.\nLet's try again, ${gamer}!`);
};

const getRespond = () => {
  const respond = readlineSync.question('Your answer: ');
  return respond;
};

const isEven = () => {
  /*
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  */
  const gamer = greet();
  console.log(QUESTION_TITLE);
  while (correctAnswersCount < correctAnswersNum) {
    const input = getRandomNumber();
    const question = formQuestion(input);
    console.log(question);
    // formQuestion(input);
    const respond = getRespond();
    const feedback = formFeedback(checkIfEven(input), respond, gamer);
    console.log(feedback);
    
    if (feedback === 'Correct!') {
      correctAnswersCount +=1;
    } else {
      return 
    }
  }
  console.log(`Congratulations, ${gamer}!`);
};

export default isEven;
