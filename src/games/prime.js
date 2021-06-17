import run, {
  QUESTION_COUNT,
  getStringAnswer,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const boundary = Math.floor(num / 2);

  let res = true;

  for (let i = 3; i <= boundary; i += 1) {
    if (num % i === 0) res = false;
  }
  return res;
};

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const res = [];
  while (questionCount > 0) {
    const digit = Math.floor(Math.random() * 100);
    res.push({
      question: digit,
      rightAnswer: getStringAnswer(checkIsPrime(digit)),
    });
    questionCount -= 1;
  }
  return res;
};

export default () => {
  run(description, generateQuestions());
};
