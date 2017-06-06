import { fetchAction } from 'alexs-redux-fetch/fetch/actions';
import * as projectApi from './../api/project';
import * as refs from 'shared/constants/refs';

export const fetchProjects = () => fetchAction(
  refs.FETCH_PROJECTS,
  projectApi.getProjects()
);

export const fetchProject = id => fetchAction(
  refs.fetchProject(id),
  projectApi.getProject(id)
);

export const fetchSpecSteps = (id, spec, browser) => fetchAction(
  refs.fetchSpecSteps(id, spec, browser),
  projectApi.getSpecSteps(id, spec, browser)
)

export const saveResults = (id, spec, browser, results) => fetchAction(
  refs.saveResults(id, spec, browser),
  projectApi.saveResults(id, spec, browser, results)
)