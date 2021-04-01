import { createSelector } from "reselect";

const selectGame = (state) => state.game;

export const currentQuestionNumber = createSelector(
  [selectGame],
  (state) => state.currentQuestion
);

const questions = createSelector([selectGame], (state) => state.questions);

export const currentQuestion = createSelector(
  questions,
  currentQuestionNumber,
  (questions, currentQuestionNumber) => questions[currentQuestionNumber]
);

export const questionsCount = createSelector(
  questions,
  (state) => state.length
);
