import run, {
  QUESTION_COUNT,
  getStringAnswer,
} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const res = [];
  while (questionCount > 0) {
    const digit = Math.floor(Math.random() * 100);
    const rightAnswer = getStringAnswer(isEven(digit));
    res.push({
      question: `${digit}`,
      rightAnswer,
    });
    questionCount -= 1;
  }
  return res;
};

export default () => {
  run(description, generateQuestions());
};
