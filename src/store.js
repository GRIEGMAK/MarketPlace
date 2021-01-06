import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middleWare = applyMiddleware(logger)

export default () => {
  const store = createStore(rootReducer, middleWare);
  return store;
};
