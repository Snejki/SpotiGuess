import { AuthTypes } from "./auth.types";

const INITIAL_STATE = {
  token: null,
  validTill: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_SUCESS:
      console.log("FIRED");
      return {
        ...state,
        token: action.payload.token,
        validTill: action.payload.validTill,
      };
      break;

    default:
      return state;
  }
};

export default AuthReducer;
