import { name, QUESTION_COUNT } from '../src/cli.js';
import {
  printError, printCongrat, askQuestion, generateNumber,
} from '../src/index.js';

const checkInput = (str) => typeof Number(str) === 'number';

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

const gcd = () => {
  let questionCount = QUESTION_COUNT;
  while (questionCount > 0) {
    const digit1 = generateNumber();
    const digit2 = generateNumber();
    const rightAnswer = getEcd(digit1, digit2);
    const answer = askQuestion(`${digit1} ${digit2}`);

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

export { gcd as default };
