import axios from 'axios';
import { ILogin } from '../interfaces/login.interface';
import {
  ICreateSupplies,
  IUpdateSupplies,
} from '../interfaces/useState.interface';

axios.defaults.baseURL = 'https://ce-api-production.up.railway.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const api = {
  login: async (user: ILogin) => {
    return (await axios.post('/auth/login', user)).data;
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

  findByIdSpply: async (id?: string) => {
    try {
      return await (
        await axios.get('/supplies/find/' + id)
      ).data;
    } catch (error) {
      console.log(error);
    }
  },

  updateSupply: async (supply: IUpdateSupplies, id?: string) => {
    try {
      return await (
        await axios.patch('/supplies/update/' + id, supply)
      ).data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteSupply: async (id?: string) => {
    try {
      return await (
        await axios.delete('/supplies/delete/' + id)
      ).data;
    } catch (error) {
      console.log(error);
    }
  },
};
