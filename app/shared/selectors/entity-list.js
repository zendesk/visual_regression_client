import nestSelectors from 'alexs-redux-helpers/selectors/nest-selectors';
import { getEntityList } from 'shared/store';
import { selectors } from 'shared/store/entity-list';

export default nestSelectors(selectors, getEntityList);