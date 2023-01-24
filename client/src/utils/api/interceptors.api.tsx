import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Auth() {
  const navigate = useNavigate();

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
        navigate('/');
        // window.location.href = ;
      }
      return Promise.reject(error);
    },
  );
  return <></>;
}
