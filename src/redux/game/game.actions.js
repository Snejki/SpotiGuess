import { GameTypes } from "./game.types";

export const initQuestions = (questions) => ({
  type: GameTypes.INIT_GAME,
  payload: questions,
});

export const answerQuestion = (answer) => ({
  type: GameTypes.ANSWER_QUESTION,
  payload: answer,
});

export const nextQuestion = () => ({
  type: GameTypes.NEXT_QUESTION,
});
