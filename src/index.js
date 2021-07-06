import readlineSync from 'readline-sync';

const QUESTION_COUNT = 3;

const run = (description, rounds) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < rounds.length; i += 1) {
    const { question, rightAnswer } = rounds[i];
    const answer = readlineSync.question(`Question: ${question}\n`);

    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log(`Your answer: ${answer}`);
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  QUESTION_COUNT,
  run as default,
};
