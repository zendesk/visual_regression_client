import { createEntitySelectors } from 'alexs-redux-fetch';
import { getApi } from 'shared/store';
import entityListSelectors from './entity-list';

const projectSelectors = createEntitySelectors('project', getApi);

const getAll = state => entityListSelectors.getList(state, 'projects').map(id => projectSelectors.getById(state, id))

const getSpecs = (state, id) => {
  const project = projectSelectors.getById(state, id);

  return Object.values(project.specs || {});
}

const getBrowsers = (state, id, specId) => {
  const project = projectSelectors.getById(state, id);

  if (!project || !project.specs) {
    return [];
  }

  const spec = project.specs[specId];

  if (!spec) {
    return [];
  }

  return Object.values(spec.browsers || {});
}

export default {
  ...projectSelectors,
  getAll,
  getSpecs,
  getBrowsers
};