import { coinActionTypes } from "./coin.types";

const INITIAL_USER_STATE = {
  bitcoinData: null,
  ethereumData: null,
  solanaData: null,
};

const coinReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case coinActionTypes.SET_BITCOIN_DATA:
      return {
        ...state,
        bitcoinData: action.payload,
      };
    case coinActionTypes.SET_ETHEREUM_DATA:
      return {
        ...state,
        ethereumData: action.payload,
      };
    case coinActionTypes.SET_SOLANA_DATA:
      return {
        ...state,
        solanaData: action.payload,
      };
    default:
      return state;
  }
};

export default coinReducer;
