import { getAuth } from 'shared/store';
import { selectors } from 'shared/store/auth';

export const getIsLoggedIn = state => selectors.getIsLoggedIn(getAuth(state));

export default {
  getIsLoggedIn
}

