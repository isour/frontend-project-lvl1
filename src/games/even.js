import run, {
  QUESTION_COUNT,
} from '../index.js';

import generateNumber from '../utils.js';

const getAnswer = (bool) => (bool ? 'yes' : 'no');

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestions = () => {
  let questionCount = QUESTION_COUNT;
  const rounds = [];
  while (questionCount > 0) {
    const digit = generateNumber(0, 100);
    const rightAnswer = getAnswer(isEven(digit));
    rounds.push({
      question: digit.toString(),
      rightAnswer,
    });
    questionCount -= 1;
  }
  return rounds;
};

export default () => {
  run(description, generateQuestions());
};
