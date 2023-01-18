import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const api = {
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
