import { GameTypes } from "./game.types";

const INITIAL_STATE = {
  questions: [],
  currentQuestion: 0,
};

const GameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GameTypes.INIT_GAME:
      console.log(action);
      return {
        questions: action.payload,
        currentQuestion: 0,
      };
    case GameTypes.NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: ++state.currentQuestion,
      };
    default:
      return state;
  }
};

export default GameReducer;
