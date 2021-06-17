import run, {
  generateNumber,
  QUESTION_COUNT,
} from '../index.js';

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

const getOperation = () => operations[Math.floor(Math.random() * operations.length)];

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const res = [];
  while (questionCount > 0) {
    const digit1 = generateNumber();
    const digit2 = generateNumber();
    const operLink = getOperation();
    const rightAnswer = String(operLink.fn(digit1, digit2));
    const operSign = operLink.sign;
    const question = `${digit1} ${operSign} ${digit2}`;
    res.push({
      question,
      rightAnswer,
    });
    questionCount -= 1;
  }
  return res;
};

export default () => {
  run(description, generateQuestions());
};
