import { createMultiReducer } from 'alexs-redux-helpers/reducers';
import { successType } from 'alexs-redux-fetch/fetch';
import {
  LOGIN,
  CHECK_LOGIN,
  LOGOUT
} from 'shared/constants/refs';

export default createMultiReducer({
  isLoggedIn: {
    initial: false,
    [successType(LOGIN)]: true,
    [successType(CHECK_LOGIN)]: true,
    [successType(LOGOUT)]: false
  },
  account: {
    initial: null,
    [successType(LOGIN)]: (_, action) => action.payload.result.account,
    [successType(CHECK_LOGIN)]: (_, action) => action.payload.result.account,
    [successType(LOGOUT)]: null
  },
  company: {
    initial: null,
    [successType(LOGIN)]: (_, action) => action.payload.result.company,
    [successType(CHECK_LOGIN)]: (_, action) => action.payload.result.company,
    [successType(LOGOUT)]: null
  }
});

const getIsLoggedIn = state => state.isLoggedIn;
const getAccountId = state => state.account;
const getCompanyId = state => state.company;

export const selectors = {
  getIsLoggedIn,
  getAccountId,
  getCompanyId
};