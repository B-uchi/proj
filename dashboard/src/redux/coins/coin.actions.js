import { coinActionTypes } from "./coin.types";

export const setSolanaData = (coinData) => ({
  type: coinActionTypes.SET_SOLANA_DATA,
  payload: coinData,
});
export const setBitcoinData = (coinData) => ({
  type: coinActionTypes.SET_BITCOIN_DATA,
  payload: coinData,
});
export const setEthereumData = (coinData) => ({
  type: coinActionTypes.SET_ETHEREUM_DATA,
  payload: coinData,
});
