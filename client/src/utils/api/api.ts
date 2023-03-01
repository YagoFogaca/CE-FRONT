import axios from 'axios';
import { IUserLogin } from '../interfaces/index.api';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export class Api {
  static async login(user: IUserLogin) {
    return (await axios.post('/auth/login', user)).data;
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
