import { successType } from 'alexs-redux-fetch/fetch';
import { FETCH_PROJECTS } from 'shared/constants/refs';
import createList from './create-list';

const reducer = createList({
  [successType(FETCH_PROJECTS)]: ''
})

export default reducer;