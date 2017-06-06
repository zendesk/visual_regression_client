import { createFetchSelectors } from 'alexs-redux-fetch';
import { getApi } from 'shared/store';

const selectors = createFetchSelectors(getApi);

export default selectors;