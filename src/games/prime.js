import run, {
  QUESTION_COUNT,
} from '../index.js';

import generateNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswer = (bool) => (bool ? 'yes' : 'no');

const isPrime = (num) => {
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
  const rounds = [];
  while (questionCount > 0) {
    const digit = generateNumber(1, 100);
    rounds.push({
      question: digit.toString(),
      rightAnswer: getAnswer(isPrime(digit)),
    });
    questionCount -= 1;
  }
  return rounds;
};

export default () => {
  run(description, generateQuestions());
};
