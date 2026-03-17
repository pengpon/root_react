import { Toast } from '@repo/utils';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE;

const frontApi = axios.create({
  baseURL: API_BASE,
});

frontApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    const message = !response?.data.success ? response.data.message : 'Something went wrong.';
    Toast.fire({
      position: 'top',
      icon: 'error',
      title: message,
      color: '#1f2937',
      iconColor: '#ef4444',
      background: '#ffffff',
    });

    return Promise.reject(error);
  },
);

export { frontApi };
