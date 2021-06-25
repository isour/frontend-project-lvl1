import run, {
  generateNumber, QUESTION_COUNT,
} from '../index.js';

const description = 'What number is missing in the progression?';

const getSequence = () => {
  const length = 5 + generateNumber(0, 5);
  const base = generateNumber(0, 100);
  const seq = [];
  for (let i = 0; i < length; i += 1) {
    seq[i] = base + i;
  }
  return seq;
};

const getCensouredSequence = (arr, idx) => {
  const seq = [...arr];
  seq[idx] = '..';
  return seq;
};

const printArray = (arr) => arr.reduce((acc, current) => `${acc} ${current}`, '').trim();

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const res = [];
  while (questionCount > 0) {
    const seq = getSequence();
    const seqElIndex = generateNumber(0, seq.length);
    const rightAnswer = String(seq[seqElIndex]);
    res.push({
      question: printArray(getCensouredSequence(seq, seqElIndex)),
      rightAnswer,
    });
    questionCount -= 1;
  }
  return res;
};

export default () => {
  run(description, generateQuestions());
};
