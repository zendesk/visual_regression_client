import { createEntitySelectors } from 'alexs-redux-fetch';
import { getApi } from 'shared/store';

const compareSelectors = createEntitySelectors('compare', getApi);

export default compareSelectors;
