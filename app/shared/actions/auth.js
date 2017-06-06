import { fetchAction } from 'alexs-redux-fetch/fetch/actions';
import {
  LOGIN,
  CHECK_LOGIN,
  LOGOUT
} from 'shared/constants/refs';
import authApi from 'shared/api/auth';

export const login = (email, password) => fetchAction(
  LOGIN,
  authApi.login(email, password)
);

export const checkLoggedIn = () => fetchAction(
  CHECK_LOGIN,
  authApi.checkLoggedIn()
);

export const logout = () => fetchAction(
  LOGOUT,
  authApi.logout()
);