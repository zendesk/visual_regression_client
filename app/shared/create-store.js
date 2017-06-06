import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import store from './store';

export default () => createStore(
  store,
  applyMiddleware(
    thunk,
    logger
  )
);