import { name, QUESTION_COUNT } from '../src/cli.js';
import {
  printError, printCongrat, askQuestion, generateNumber,
} from '../src/index.js';

const checkInput = (str) => typeof Number(str) === 'number';

const getSequence = () => {
  const length = 5 + generateNumber(5);
  const base = generateNumber();
  const seq = [];
  for (let i = 0; i < length; i += 1) {
    seq[i] = base + i;
  }
  return seq;
};

const getCensouredSequence = (arr, idx) => {
  const seq = [...arr];
  seq[idx] = '..';
  return seq;
};

const printArray = (arr) => arr.reduce((acc, current) => `${acc} ${current}`, '');

const progression = () => {
  let questionCount = QUESTION_COUNT;
  while (questionCount > 0) {
    const seq = getSequence();
    const seqLength = seq.length;
    const seqElIndex = generateNumber(seqLength);
    const rightAnswer = seq[seqElIndex];
    const answer = askQuestion(printArray(getCensouredSequence(seq, seqElIndex)));

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

export { progression as default };
