import { combineReducers } from "redux";
import AuthReducer from "./auth/auth.reducer";
import GameReducer from "./game/game.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  game: GameReducer,
});

export default rootReducer;
