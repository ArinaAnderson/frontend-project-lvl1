import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};
/*
#!/usr/bin/env node
import isEven from '../src/games/is-even.js';

isEven();
*/
export default greet;
