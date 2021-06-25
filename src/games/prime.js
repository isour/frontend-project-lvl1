import run, {
  QUESTION_COUNT,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getStringAnswer = (bool) => (bool ? 'yes' : 'no');

const checkIsPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const boundary = Math.floor(num / 2);

  for (let i = 3; i <= boundary; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const result = [];
  while (questionCount > 0) {
    const digit = Math.floor(Math.random() * 100);
    result.push({
      question: digit,
      rightAnswer: getStringAnswer(checkIsPrime(digit)),
    });
    questionCount -= 1;
  }
  return result;
};

export default () => {
  run(description, generateQuestions());
};
