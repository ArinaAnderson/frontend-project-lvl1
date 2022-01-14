import setGame from '../index.js';

import { getRandomNumber, generateGameParams } from '../utils.js';

const GAME_TASK = 'What number is missing in the progression?';
const sequenceLength = 10;

const setGameParams = () => {
  let correctVal = null;
  const sequenceDif = getRandomNumber(1, 9);
  const firstMember = getRandomNumber(1, 20);
  const hiddenMemberIdx = getRandomNumber(1, sequenceLength - 1);

  const buildSequence = (idx, acc, sequenceStr) => {
    if (idx === sequenceLength) {
      return sequenceStr;
    }
    const newElem = acc + sequenceDif;
    let newSequenceStr;
    if (idx === hiddenMemberIdx) {
      newSequenceStr = sequenceStr.concat(' ..');
      correctVal = newElem;
    } else {
      newSequenceStr = sequenceStr.concat(` ${newElem}`);
    }

    return buildSequence(idx + 1, newElem, newSequenceStr);
  };

  const questionVal = buildSequence(1, firstMember, `${firstMember}`);

  return generateGameParams(questionVal, correctVal);
};

const playBrainProgression = () => {
  setGame(GAME_TASK, setGameParams);
};

export default playBrainProgression;
