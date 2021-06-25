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

const makeQuestion = (arr) => arr.reduce((acc, current) => `${acc} ${current}`, '').trim();

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const result = [];
  while (questionCount > 0) {
    const seq = getSequence(1, generateNumber(0, 100), 5 + generateNumber(0, 5));
    const seqElIndex = generateNumber(0, seq.length);
    const rightAnswer = String(seq[seqElIndex]);
    result.push({
      question: makeQuestion(getCensouredSequence(seq, seqElIndex)),
      rightAnswer,
    });
    questionCount -= 1;
  }
  return result;
};

export default () => {
  run(description, generateQuestions());
};
