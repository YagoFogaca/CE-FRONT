import axios from 'axios';
import { IUserLogin } from '../interfaces/index.api';
import { ICreateControlSupply } from '../interfaces/index.entry';
import { ICreateSupply, IUpdateSupply } from '../interfaces/index.supply';

axios.defaults.baseURL = 'https://ce-api-production.up.railway.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export class Api {
  static async login(user: IUserLogin) {
    return (await axios.post('/auth/login', user)).data;
  }

  static async findALLSupplies() {
    return (await axios.get('/supplies/find-all')).data;
  }

  static async findByIdSupply(id: string | undefined) {
    return (await axios.get('/supplies/find/' + id)).data;
  }

  static async createSupply(supply: ICreateSupply) {
    return (await axios.post('/supplies/create', supply)).data;
  }

  static async updateSupply(id?: string, supply?: IUpdateSupply) {
    return (await axios.patch('/supplies/update/' + id, supply)).data;
  }

  static async deleteSupply(id?: string) {
    return (await axios.delete('/supplies/delete/' + id)).data;
  }

  static async findAllEntry() {
    return (await axios.get('/entry-supply/find-all')).data;
  }

  static async createEntry(entry: ICreateControlSupply) {
    return await (
      await axios.post('/entry-supply/create', entry)
    ).data;
  }

  static async findAllExit() {
    return (await axios.get('/exit-supply/find-all')).data;
  }
}

// export const api = {
//   login: async (user: ILogin) => {
//     return (await axios.post('/auth/login', user)).data;
//   },

//   createSupply: async (supply: ICreateSupplies) => {
//     return await axios.post('/supplies/create', supply);
//   },

//   findAllSpply: async () => {
//     try {
//       return await (
//         await axios.get('/supplies/find-all')
//       ).data;
//     } catch (error) {
//       console.log(error);
//     }
//   },

//   findByIdSpply: async (id?: string) => {
//     try {
//       return await (
//         await axios.get('/supplies/find/' + id)
//       ).data;
//     } catch (error) {
//       console.log(error);
//     }
//   },

//   updateSupply: async (supply: IUpdateSupplies, id?: string) => {
//     try {
//       return await (
//         await axios.patch('/supplies/update/' + id, supply)
//       ).data;
//     } catch (error) {
//       console.log(error);
//     }
//   },

//   deleteSupply: async (id?: string) => {
//     try {
//       return await (
//         await axios.delete('/supplies/delete/' + id)
//       ).data;
//     } catch (error) {
//       console.log(error);
//     }
//   },

//   findAllEntry: async () => {
//     return (await axios.get('/entry-supply/find-all')).data;
//   },

//   createEntry: async (entry: ICreateEntrySupply) => {
//     console.log(entry);
//     return await axios.post('/entry-supply/create', entry);
//   },
// };
