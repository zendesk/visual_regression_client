import { normalize } from 'normalizr';
import api from './api';
import { Project } from 'shared/schemas';

const projects = {
  'chrome_osx_1000x900': {
    'todo_page': {

    }
  }
}

export const getSpecs = () => api
  .fake('/projects', Object.values(projects).map(project => ({ title: project.title })))
  .then(res => res.data)
  .then(res => normalize(res, [Project]));

export const getProject = id => api
  .fake(`/project/${id}`, projects[id])
  .then(res => res.data)
  .then(res => normalize(res, Project));
