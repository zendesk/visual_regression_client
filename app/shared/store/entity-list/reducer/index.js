import { combineReducers } from 'redux';
import projects from './projects';

export default combineReducers({
  projects
});

const getList = (state, listName) => state[listName] || [];

export const selectors = {
  getList
};