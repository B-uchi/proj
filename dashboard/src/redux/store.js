import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const middlewares = [];
const store = createStore(rootReducer);

    
export default store;
