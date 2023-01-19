import axios from 'axios';
import { ICreateSupplies } from '../interfaces/useState.interface';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const api = {
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
