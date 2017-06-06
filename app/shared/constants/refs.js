import { getCompareId } from './ids';

export const LOGIN = 'LOGIN';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const LOGOUT = 'LOGOUT';

export const FETCH_PROJECTS = 'PROJECT/FETCH';
export const fetchProject = id => `PROJECT/${id}/FETCH`;

export const fetchSpecSteps = (id, spec, browser) => `STEPS/${getCompareId(id, spec, browser)}/FETCH`;
export const saveResults = (id, spec, browser) => `STEPS/${getCompareId(id, spec, browser)}/SAVE`;
