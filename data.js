const colors = require("@colors/colors/safe");

const characters = {
  NALA: {
    id: 0,
    displayName: "Nala",
    color: colors.red,
  },

  BLUMPY: {
    id: 1,
    displayName: "Blumpy",
    color: colors.bold.blue,
  },

  SIRES: {
    id: 2,
    displayName: "Sires",
    color: colors.bold.grey,
  },

  SARABI: {
    id: 3,
    displayName: "Sarabi",
    color: colors.bold.yellow,
  },

  KAREN: {
    id: 4,
    displayName: "Karen",
    color: colors.bold.green,
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
    text: "When you meet an enemy, you:",
    answers: [
      {
        text: "Make fun of its looks.",
        character: characters.SARABI,
      },
      {
        text: "Keep your distance until the team arrives.",
        character: characters.BLUMPY,
      },
      {
        text: "Attack it immediately.",
        character: characters.KAREN,
      },
      {
        text: "Sneak up to them, knock them over, and jump on them.",
        character: characters.NALA,
      },
      {
        text: "Plan your battle strategy.",
        turtle: characters.SIRES,
      },
    ],
  },
  {
    text: "Your favorite part of training is:",
    answers: [
      {
        text: "Getting to learn strategies and tactics.",
        turtle: characters.SIRES,
      },
      {
        text: "Beating all your brothers in combat.",
        turtle: characters.KAREN,
      },
      {
        text: "Practicing your ninja moves.",
        turtle: characters.NALA,
      },
      {
        text: "Jumping all around the dojo.",
        turtle: characters.SARABI,
      },
      {
        text: "I'd actually rather be working in the lab.",
        turtle: characters.BLUMPY,
      },
    ],
  },
];

module.exports = { questions, turtles: characters };
