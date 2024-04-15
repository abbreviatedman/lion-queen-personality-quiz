const colors = require("@colors/colors/safe");

const characters = {
  NALA: {
    id: 0,
    displayName: "Nala",
    color: colors.red,
    description:
      "You're kind, loyal, fun to hang out with, and always fight for your loved ones and what you believe in. But sometimes you should just relax and hang back.",
  },

  BLUMPY: {
    id: 1,
    displayName: "Blumpy",
    color: colors.bold.blue,
    description:
      "You're silly and funny and very fun. You like to pretend to be foolish, like a big goofball, but you take things seriously when you need to.",
  },

  SIRES: {
    id: 2,
    displayName: "Sires",
    color: colors.grey,
    description:
      "You're loyal and kind and you fight when you're needed, but prefer to relax. You're persistent and would do anything for the people you love.",
  },

  SARABI: {
    id: 3,
    displayName: "Sarabi",
    color: colors.bold.yellow,
    description:
      "You're in charge of a lot between work and family, but you take things easy when you get a chance. And you fight when your people need you.",
  },

  KAREN: {
    id: 4,
    displayName: "Karen",
    color: colors.bold.green,
    description:
      "You're kind and loving, and you take care of everyone no matter how challenging it becomes. You depend on people and are persistent.",
  },
};

const questions = [
  {
    text: "What is your favorite color?",
    answers: [
      {
        text: "Yellow",
        character: characters.SARABI,
      },
      {
        text: "Green",
        character: characters.KAREN,
      },
      {
        text: "Grey",
        character: characters.SIRES,
      },
      {
        text: "Blue",
        character: characters.BLUMPY,
      },
      {
        text: "Red",
        character: characters.NALA,
      },
    ],
  },
  {
    text: "If you could go on vacation anywhere, where would you go?",
    answers: [
      {
        text: "Staycation",
        character: characters.SIRES,
      },
      {
        text: "Tropical Island",
        character: characters.KAREN,
      },
      {
        text: "Disney Land",
        character: characters.BLUMPY,
      },
      {
        text: "Local Beach",
        character: characters.SARABI,
      },
      {
        text: "Escape Room",
        character: characters.NALA,
      },
    ],
  },
  {
    text: "If you were a car, what kind would you be?",
    answers: [
      {
        text: "A jeep.",
        character: characters.SIRES,
      },
      {
        text: "A limousine.",
        character: characters.BLUMPY,
      },
      {
        text: "An 18-wheeler.",
        character: characters.NALA,
      },
      {
        text: "A royal race car.",
        character: characters.SARABI,
      },
      {
        text: "A minivan.",
        character: characters.KAREN,
      },
    ],
  },
  {
    text: "If you could have any superpower, what would it be?",
    answers: [
      {
        text: "Flight.",
        character: characters.BLUMPY,
      },
      {
        text: "Super speed.",
        character: characters.SARABI,
      },
      {
        text: "Teleportation.",
        character: characters.KAREN,
      },
      {
        text: "Healing.",
        character: characters.SIRES,
      },
      {
        text: "Super strength.",
        character: characters.NALA,
      },
    ],
  },
  {
    text: "What's your favorite Disney song?",
    answers: [
      {
        text: "At Last I See The Light.",
        character: characters.SARABI,
      },
      {
        text: "When Will My Life Begin (Reprise).",
        character: characters.BLUMPY,
      },
      {
        text: "Let It Go.",
        character: characters.KAREN,
      },
      {
        text: "One Jump.",
        character: characters.NALA,
      },
      {
        text: "Part Of Your World.",
        character: characters.SIRES,
      },
    ],
  },
  {
    text: "Your favorite food is:",
    answers: [
      {
        text: "French Fries.",
        character: characters.SIRES,
      },
      {
        text: "Turkey.",
        character: characters.KAREN,
      },
      {
        text: "Apple Pie.",
        character: characters.NALA,
      },
      {
        text: "Ham.",
        character: characters.SARABI,
      },
      {
        text: "Watermelon.",
        character: characters.BLUMPY,
      },
    ],
  },
  {
    text: "What is your favorite rainy-day activity?",
    answers: [
      {
        text: "Play with my favorite toys.",
        character: characters.SIRES,
      },
      {
        text: "Organizing an indoor picnic for your family.",
        character: characters.KAREN,
      },
      {
        text: "Explore different parts of your home than usual.",
        character: characters.NALA,
      },
      {
        text: "Plan out tomorrow.",
        character: characters.SARABI,
      },
      {
        text: "Find fun places to jump off of around your home.",
        character: characters.BLUMPY,
      },
    ],
  },
];

module.exports = { questions, characters };
