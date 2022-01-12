import readlineSync from 'readline-sync';

const roundsNum = 3;

// const setGameParams = (setGameParamsCallback) => setGameParamsCallback();
const checkRespond = (correctVal, respond) => correctVal === respond;

const setGame = (title, setGameParams) => {
  let roundsCount = 0;

  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}`);

  console.log(title);
  while (roundsCount < roundsNum) {
    const { option, correctVal } = setGameParams();
    console.log(`Question: ${option}`);
    const respond = readlineSync.question('Your answer: ');
    const isCorrect = checkRespond(typeof correctVal === 'string' ? correctVal : correctVal.toString(10), respond);
    if (isCorrect) {
      roundsCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${respond}' is wrong answer ;(. Correct answer was '${correctVal}'.\nLet's try again, ${gamerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${gamerName}!`);
};

export default setGame;
