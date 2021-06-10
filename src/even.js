import readlineSync from 'readline-sync';
import { name } from './cli.js';

const getError = (obj) => {
  const { type, answer, correctAnswer } = obj;
  if (type === 'correct') {
    return `Correct!`;
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
};

const printError = (obj) => {
  console.log(getError(obj));
  return false;
};

const getBoolAnswer = (str) => str === 'yes';

const getStringAnswer = (bool) => (bool ? 'yes' : 'no');

const checkInput = (str) => str === 'yes' || str === 'no';

const askEven = () => {
  let questionCount = 3;
  while (questionCount > 0) {
    const digit = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${digit}\n`);
    const isEven = digit % 2 === 0;
    if (checkInput(answer) && isEven === getBoolAnswer(answer)) {
      printError({answer, correctAnswer: getStringAnswer(isEven), type: 'correct'});
      if (questionCount === 1) {
        console.log(`Congratulations, ${name}!`);
      }
      questionCount -= 1;
    } else {
      printError({answer, correctAnswer: getStringAnswer(isEven)});
      questionCount = 0;
    }
  }
};

export default askEven;
