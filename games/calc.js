import { name, QUESTION_COUNT } from '../src/cli.js';
import { printError, printCongrat, askQuestion } from '../src/index.js';

const checkInput = (str) => typeof Number(str) === 'number';

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

const calc = () => {
  let questionCount = QUESTION_COUNT;
  while (questionCount > 0) {
    const digit1 = Math.floor(Math.random() * 100);
    const digit2 = Math.floor(Math.random() * 100);
    const operLink = getOperation();
    const rightAnswer = operLink.fn(digit1, digit2);
    const operSign = operLink.sign;
    const answer = askQuestion(`${digit1} ${operSign} ${digit2}`);
    if (checkInput(answer) && (Number(answer) === rightAnswer)) {
      printError(
        {
          answer, correctAnswer: rightAnswer, type: 'correct', name,
        },
      );
      if (questionCount === 1) {
        printCongrat(name);
      }
      questionCount -= 1;
    } else {
      printError({ answer, correctAnswer: rightAnswer, name });
      questionCount = 0;
    }
  }
};

export { calc as default };
