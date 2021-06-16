import { name, QUESTION_COUNT } from '../src/cli.js';
import { printError, printCongrat, askQuestion } from '../src/index.js';

const getStringAnswer = (bool) => (bool ? 'yes' : 'no');

const checkInput = (str) => str === 'yes' || str === 'no';

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

const askEven = () => {
  let questionCount = QUESTION_COUNT;
  while (questionCount > 0) {
    const digit = Math.floor(Math.random() * 100);
    const answer = askQuestion(digit);
    const pr = checkIsPrime(digit);
    if (checkInput(answer) && pr === (answer === 'yes')) {
      printError(
        {
          answer, correctAnswer: getStringAnswer(pr), type: 'correct', name,
        },
      );
      if (questionCount === 1) {
        printCongrat(name);
      }
      questionCount -= 1;
    } else {
      printError({ answer, correctAnswer: getStringAnswer(pr), name });
      questionCount = 0;
    }
  }
};

export default askEven;
