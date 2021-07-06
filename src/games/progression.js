import run, {
  QUESTION_COUNT,
} from '../index.js';

import generateNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getSequence = (progressionStep, progressionBase, progressionLength) => {
  const seq = [];
  let step = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    seq[i] = progressionBase + step;
    step += progressionStep;
  }
  return seq;
};

const getCensouredSequence = (arr, idx) => {
  const seq = [...arr];
  seq[idx] = '..';
  return seq;
};

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const rounds = [];
  while (questionCount > 0) {
    const seq = getSequence(1, generateNumber(0, 100), generateNumber(5, 10));
    const hiddenIndex = generateNumber(0, seq.length);
    const rightAnswer = String(seq[hiddenIndex]);
    rounds.push({
      question: getCensouredSequence(seq, hiddenIndex).join(' ').trim(),
      rightAnswer,
    });
    questionCount -= 1;
  }
  return rounds;
};

export default () => {
  run(description, generateQuestions());
};
