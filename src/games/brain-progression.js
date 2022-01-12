import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const QUESTION_TITLE = 'What number is missing in the progression?';
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

  const option = buildSequence(1, firstMember, `${firstMember}`);
  return {
    option,
    correctVal,
  };
};

const playBrainProgression = () => {
  setGame(QUESTION_TITLE, setGameParams);
};

export default playBrainProgression;
