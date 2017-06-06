import api from './api';

export const login = (email, password) => api
  .post('/sessions', { email, password })

export const checkLoggedIn = () => api
  .get('/sessions')
  .then(res => res.data)
  .then(data => {
    if (data.account && data.company) {
      return data
    }
    throw new Error('Not logged in')
  })

export const logout = () => api.get('/api/logout')

export default {
  login,
  checkLoggedIn,
  logout
}