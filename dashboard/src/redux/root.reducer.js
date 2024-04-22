import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import navReducer from "./nav/sideNav.reducer";
import coinReducer from "./coins/coin.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  nav: navReducer,
  coins: coinReducer,
});

export default rootReducer;
