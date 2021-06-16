import { name, QUESTION_COUNT } from '../src/cli.js';
import { printError, printCongrat, askQuestion } from '../src/index.js';

const getStringAnswer = (bool) => (bool ? 'yes' : 'no');

const checkInput = (str) => str === 'yes' || str === 'no';

const askEven = () => {
  let questionCount = QUESTION_COUNT;
  while (questionCount > 0) {
    const digit = Math.floor(Math.random() * 100);
    const answer = askQuestion(digit);
    const isEven = digit % 2 === 0;
    if (checkInput(answer) && isEven === (answer === 'yes')) {
      printError(
        {
          answer, correctAnswer: getStringAnswer(isEven), type: 'correct', name,
        },
      );
      if (questionCount === 1) {
        printCongrat(name);
      }
      questionCount -= 1;
    } else {
      printError({ answer, correctAnswer: getStringAnswer(isEven), name });
      questionCount = 0;
    }
  }
};

export default askEven;
