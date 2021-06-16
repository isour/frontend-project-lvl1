import readlineSync from 'readline-sync';

const QUESTION_COUNT = 3;

const name = readlineSync.question('May I have your name? ');

const askName = () => {
  console.log(`Hello, ${name}!`);
};

export { askName as default, name, QUESTION_COUNT };
