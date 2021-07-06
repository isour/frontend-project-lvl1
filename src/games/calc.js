import run, {
  QUESTION_COUNT,
} from '../index.js';

import generateNumber from '../utils.js';

const description = 'What is the result of the expression?';

const operations = [
  {
    sign: '+',
    fn: (a, b) => Number(a) + Number(b),
  },
  {
    sign: '-',
    fn: (a, b) => Number(a) - Number(b),
  },
  {
    sign: '*',
    fn: (a, b) => Number(a) * Number(b),
  }];

const getOperation = () => operations[generateNumber(0, operations.length)];

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const rounds = [];
  while (questionCount > 0) {
    const digit1 = generateNumber(0, 100);
    const digit2 = generateNumber(0, 100);
    const operLink = getOperation();
    const rightAnswer = String(operLink.fn(digit1, digit2));
    const operSign = operLink.sign;
    const question = `${digit1} ${operSign} ${digit2}`;
    rounds.push({
      question,
      rightAnswer,
    });
    questionCount -= 1;
  }
  return rounds;
};

export default () => {
  run(description, generateQuestions());
};
