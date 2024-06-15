import { userActionTypes } from "../user/user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const clearCurrentUser = () => ({
  type: userActionTypes.CLEAR_CURRENT_USER,
});
