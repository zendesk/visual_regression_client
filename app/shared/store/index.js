import { combineReducers } from 'redux';
import createApiReducer from 'alexs-redux-fetch';
import auth from './auth';
import entityList from './entity-list';

export default combineReducers({
  api: createApiReducer(),
  auth,
  entityList
});

export const getApi = state => state.api;
export const getAuth = state => state.auth;
export const getEntityList = state => state.entityList;
