import '../bin/brain-games.js';
import readlineSync from 'readline-sync';
import { name } from './cli.js';

const QUESTION_COUNT = 3;

const getStringAnswer = (bool) => (bool ? 'yes' : 'no');

const getError = (obj) => {
  const {
    type, answer, correctAnswer,
  } = obj;
  if (type === 'correct') {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
};

const printError = (obj) => {
  console.log(getError(obj));
};

const printCongrat = () => {
  console.log(`Congratulations, ${name}!`);
};

const askQuestion = (question) => readlineSync.question(`Question: ${question}\n`);

const generateNumber = (max = 100) => Math.floor(Math.random() * max);

const run = (description, rounds) => {
  console.log(description);

  for (let i = 0; i < rounds.length; i += 1) {
    const { question, rightAnswer } = rounds[i];
    const answer = askQuestion(question);

    if (answer !== rightAnswer) {
      printError({ answer, correctAnswer: rightAnswer });
      return;
    }
    printError(
      {
        answer, correctAnswer: rightAnswer, type: 'correct',
      },
    );
  }
  printCongrat();
};

export {
  printError,
  printCongrat,
  askQuestion,
  generateNumber,
  QUESTION_COUNT,
  getStringAnswer,
  run as default,
};
