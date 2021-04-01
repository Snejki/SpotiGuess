import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { initQuestions, nextQuestion } from "../../redux/game/game.actions";
import {
  currentQuestion,
  currentQuestionNumber,
  questionsCount,
} from "../../redux/game/game.selectors";
import GamePage from "./GamePage";

const mapStateToProps = createStructuredSelector({
  currentQuestionNumber: currentQuestionNumber,
  currentQuestion: currentQuestion,
  questionsCount: questionsCount,
});

const mapDispatchToProps = (dispatch) => ({
  initQuestions: (questions) => dispatch(initQuestions(questions)),
  nextQuestion: () => dispatch(nextQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
