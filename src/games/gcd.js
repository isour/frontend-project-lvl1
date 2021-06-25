import run, {
  generateNumber, QUESTION_COUNT,
} from '../index.js';

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
  const res = [];
  while (questionCount > 0) {
    const digit1 = generateNumber(0, 100);
    const digit2 = generateNumber(0, 100);
    const rightAnswer = String(getEcd(digit1, digit2));
    res.push({
      question: `${digit1} ${digit2}`,
      rightAnswer,
    });
    questionCount -= 1;
  }
  return res;
};

export default () => {
  run(description, generateQuestions());
};
