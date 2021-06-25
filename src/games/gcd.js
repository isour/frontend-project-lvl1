import run, {
  QUESTION_COUNT,
} from '../index.js';

import generateNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getEcd = (a, b) => {
  let x = a;
  let y = b;

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const result = [];
  while (questionCount > 0) {
    const digit1 = generateNumber(0, 100);
    const digit2 = generateNumber(0, 100);
    const rightAnswer = String(getEcd(digit1, digit2));
    result.push({
      question: `${digit1} ${digit2}`,
      rightAnswer,
    });
    questionCount -= 1;
  }
  return result;
};

export default () => {
  run(description, generateQuestions());
};
