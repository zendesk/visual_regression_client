import { normalize } from 'normalizr';
import api from './api';
import { Project, Compare } from 'shared/schemas';
import { getCompareId } from 'shared/constants/ids';

const projects = {
  connect: {
    title: 'connect',
    specs: {
      schedule_campaigns: {
        title: 'schedule_campaigns',
        browsers: {
          'chrome_osx_1200x900': {
            id: 'chrome_osx_1200x900',
            browser: 'chrome',
            os: 'osx',
            resolution: {
              width: 1200,
              height: 900
            },
            steps: [
              {
                title: 'view schedule campaign form',
                baseline: 'http://lorempixel.com/400/200/cats/1',
                diff: 'http://lorempixel.com/400/200/cats/2',
                challenger: 'http://lorempixel.com/400/200/cats/3'
              },
              {
                title: 'submit schedule campaign form',
                baseline: 'http://lorempixel.com/400/200/cats/4',
                diff: 'http://lorempixel.com/400/200/cats/5',
                challenger: 'http://lorempixel.com/400/200/cats/6'
              }
            ]
          },
          'firefox_osx_1200x900': {
            id: 'firefox_osx_1200x900',
            browser: 'firefox',
            os: 'osx',
            resolution: {
              width: 1200,
              height: 900
            },
            steps: [
              {
                title: 'view schedule campaign form',
                baseline: 'http://lorempixel.com/400/200/cats/1',
                diff: 'http://lorempixel.com/400/200/cats/2',
                challenger: 'http://lorempixel.com/400/200/cats/3'
              },
              {
                title: 'submit schedule campaign form',
                baseline: 'http://lorempixel.com/400/200/cats/4',
                diff: 'http://lorempixel.com/400/200/cats/5',
                challenger: 'http://lorempixel.com/400/200/cats/6'
              }
            ]
          }
        }
      },
      delete_campaign: {
        title: 'delete_campaign',
        browsers: {
          'chrome_windows_1440x1200': {
            id: 'chrome_windows_1440x1200',
            browser: 'chrome',
            os: 'windows',
            resolution: {
              width: 1440,
              height: 1200
            },
            steps: [
              {
                title: 'view campaign',
                baseline: 'http://lorempixel.com/400/200/cats/1',
                diff: 'http://lorempixel.com/400/200/cats/2',
                challenger: 'http://lorempixel.com/400/200/cats/3'
              },
              {
                title: 'select campaign options',
                baseline: 'http://lorempixel.com/400/200/cats/4',
                diff: 'http://lorempixel.com/400/200/cats/5',
                challenger: 'http://lorempixel.com/400/200/cats/6'
              }
            ]
          }
        }
      }
    }
  },
  outbound: {
    title: 'outbound'
  },
  embeddables: {
    title: 'embeddables',
    specs: {
      embeddable_settings_visual_spec: {
        title: 'embeddable_settings_visual_spec',
        browsers: {
          'firefox_47_1600x1200_windows7': {
            id: 'firefox_47_1600x1200_windows7',
            browser: 'firefox_47',
            os: 'windows7',
            resolution: {
              width: 1600,
              height: 1200
            }
          }
        }
      },
    }
  }
}

export const getProjects = () => api
// .fake('/projects', Object.keys(projects))
  .get('/projects')
  .then(res => res.data)
  .then(res => res.map(title => ({ title })))
  .then(res => normalize(res, [Project]));

export const getProject = id => api
  .fake(`/projects/${id}`, projects[id])
  // .get(`/projects/${id}`)
  .then(res => res.data)
  .then(res => normalize(res, Project));

export const getSpecSteps = (id, spec, browser) => api
// .fake(`/projects/${id}/${spec}/${browser}`, projects[id].specs[spec].browsers[browser].steps)
  .get(`/projects/${id}/${spec}/${browser}`)
  .then(res => res.data)
  .then(res => ({ id: getCompareId(id, spec, browser), steps: res }))
  .then(res => normalize(res, Compare));

export const saveResults = (id, spec, browser, results) => api
  .fake(`/projects/${id}/${spec}/${browser}`, { success: true }, results)
  .then(res => res.data)
  .then(res => {
    if (res.success !== true) {
      throw new Error();
    }
  });
