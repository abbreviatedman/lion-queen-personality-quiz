const prompt = require("prompt");
const colors = require("@colors/colors/safe");

const { questions, characters } = require("./data");

const responses = [];
prompt.message = "";
prompt.start();

for (let i = questions.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i);
  const temp = questions[i];
  questions[i] = questions[j];
  questions[j] = temp;
}

questions.forEach(({ answers }) => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = answers[i];
    answers[i] = answers[j];
    answers[j] = temp;
  }
});

const ask = async (i) => {
  if (i === questions.length) {
    finishQuiz();

    return;
  }

  const { text, answers } = questions[i];
  const questionText =
    "\n" +
    colors.brightGreen.bold(text) +
    "\n\n" +
    answers
      .map(
        (answer, i) =>
          `${colors.green.bold(i + 1)}. ${colors.black.bold(answer.text)}`
      )
      .join("\n") +
    "\n\n";

  const numCharacters = Object.keys(characters).length;
  const validator = new RegExp(
    "(?=.{1," +
      numCharacters.toString().length +
      "}$)" +
      "^[1-" +
      (numCharacters < 10 ? numCharacters : 9) +
      "]$"
  );

  const question = {
    name: "response",
    message: questionText,
    warning: colors.red.bold(
      `\n\n\nPLEASE ENTER A NUMBER BETWEEN 1 AND ${numCharacters}!`
    ),

    validator,
  };

  responses.push((await prompt.get(question)).response);
  ask(i + 1);
};

const finishQuiz = () => {
  let currentCharacter;
  let max = 0;
  const scores = {};
  responses.forEach((response, i) => {
    const { character } = questions[i].answers.find(
      (_, i) => Number(response) === i + 1
    );

    if (character.id in scores) {
      scores[character.id]++;
    } else {
      scores[character.id] = 1;
    }

    if (scores[character.id] > max) {
      currentCharacter = character;
      max = scores[character.id];
    }
  });

  console.log("\n" + currentCharacter.description);
};

console.log(
  "Have you ever wondered which Lion Queen character you are? We're here to help you find if you're a silly Blue Jay or a calm lioness.\n\nGood luck!"
);

ask(0);
