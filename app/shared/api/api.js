import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://586e6031.ngrok.io',
  withCredentials: true
});

export default instance;

instance.fake = (url, response) => {
  return new Promise(res => {
    setTimeout(() => {
      res({ data: response })
    }, 500)
  })
};