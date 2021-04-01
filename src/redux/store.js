import rootReducer from "./root-reducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

// PROBABLY ALL REDUX TO DELETE, OR AT LEAST AUTH, BECAUSE NO NEEDED

export default store;
