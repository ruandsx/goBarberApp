import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber.rxsoftwares.com/',
});

export default api;
