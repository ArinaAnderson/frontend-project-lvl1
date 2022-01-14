import readlineSync from 'readline-sync';

const roundsNum = 3;

const setGame = (gameTask, setGameParams) => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}`);

  console.log(gameTask);
  for (let i = 0; i < roundsNum; i += 1) {
    const { option, correctVal } = setGameParams();
    console.log(`Question: ${option}`);
    const respond = readlineSync.question('Your answer: ');
    if (correctVal === respond) {
      console.log('Correct!');
    } else {
      console.log(`'${respond}' is wrong answer ;(. Correct answer was '${correctVal}'.\nLet's try again, ${gamerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${gamerName}!`);
};

export default setGame;
