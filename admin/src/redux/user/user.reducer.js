import { userActionTypes } from "../user/user.types";

const INITIAL_USER_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;