import setGame from '../index.js';

import getRandomNumber from '../utils.js';

const GAME_TASK = 'What number is missing in the progression?';
const sequenceLength = 10;

const buildSequence = (idx, sequence, sequenceDif) => {
  if (idx === sequenceLength) {
    return sequence;
  }
  const newElem = sequence[idx - 1] + sequenceDif;
  sequence.push(newElem);

  return buildSequence(idx + 1, sequence, sequenceDif);
};

const buildSequenceString = (arr, hiddenMemberIdx) => {
  const sequenceMembers = [...arr];
  sequenceMembers[hiddenMemberIdx] = '..';
  return sequenceMembers.join(' ');
};

const setGameParams = () => {
  const sequenceDif = getRandomNumber(1, 9);
  const firstMember = getRandomNumber(1, 20);
  const hiddenMemberIdx = getRandomNumber(1, sequenceLength - 1);

  const sequenceMembers = buildSequence(1, [firstMember], sequenceDif);
  const questionVal = buildSequenceString(sequenceMembers, hiddenMemberIdx);
  const correctVal = sequenceMembers[hiddenMemberIdx];

  return { questionVal, correctVal: correctVal.toString() };
};

const playBrainProgression = () => {
  setGame(GAME_TASK, setGameParams);
};

export default playBrainProgression;
