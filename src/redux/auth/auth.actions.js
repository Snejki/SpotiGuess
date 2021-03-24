import { AuthTypes } from "./auth.types";

export const loginUser = (user) => ({
  type: AuthTypes.LOGIN_SUCESS,
  payload: user,
});
