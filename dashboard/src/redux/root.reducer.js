import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import navReducer from "./nav/sideNav.reducer";


const rootReducer = combineReducers({
  user: userReducer,
  nav: navReducer,
});

export default rootReducer;
