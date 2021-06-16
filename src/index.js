import readlineSync from 'readline-sync';

const getError = (obj) => {
  const {
    type, answer, correctAnswer, name,
  } = obj;
  if (type === 'correct') {
    return 'Correct!';
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
};

const printError = (obj) => {
  console.log(getError(obj));
  return false;
};

const printCongrat = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const askQuestion = (question) => readlineSync.question(`Question: ${question}\n`);

const generateNumber = () => Math.floor(Math.random() * 100);

export {
  printError, printCongrat, askQuestion, generateNumber,
};
