import readlineSync from 'readline-sync';
import askName from './cli.js';
import generateNumber from './utils.js';

const QUESTION_COUNT = 3;

let name;

const getStringAnswer = (bool) => (bool ? 'yes' : 'no');

const askQuestion = (question) => readlineSync.question(`Question: ${question}\n`);

const run = (description, rounds) => {
  name = askName();
  console.log(description);

  for (let i = 0; i < rounds.length; i += 1) {
    const { question, rightAnswer } = rounds[i];
    const answer = askQuestion(question);

    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  askQuestion,
  generateNumber,
  QUESTION_COUNT,
  getStringAnswer,
  run as default,
};
