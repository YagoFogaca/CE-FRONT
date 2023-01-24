import axios from 'axios';
import { ILogin } from '../interfaces/login.interface';
import { ICreateSupplies } from '../interfaces/useState.interface';

axios.defaults.baseURL = 'https://ce-api-production.up.railway.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    console.log(config);
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const status = error.response.status;
    if (status === 401) {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
      }
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export const api = {
  login: async (user: ILogin) => {
    try {
      const res = (await axios.post('/auth/login', user)).data;
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.user.role);
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  createSupply: async (supply: ICreateSupplies) => {
    try {
      return await (
        await axios.post('/supplies/create', supply)
      ).data;
    } catch (error) {
      console.log(error);
    }
  },

  findAllSpply: async () => {
    try {
      return await (
        await axios.get('/supplies/find-all')
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
};
