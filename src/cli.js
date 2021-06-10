import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');

const askName = () => {
  console.log(`Hello, ${name}!`);
};

export {askName as default, name};
