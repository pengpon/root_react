import axios from 'axios';
import { getCookie, Toast } from '@repo/utils';

const API_BASE = import.meta.env.VITE_API_BASE;

const adminApi = axios.create({
  baseURL: API_BASE,
});

adminApi.interceptors.request.use(
  (config) => {
    // check request URL
    if (
      config.url.includes('/admin') ||
      config.url.includes('/user/check') ||
      config.url.includes('/logout')
    ) {
      const token = getCookie('hexEcToken');
      if (token) {
        config.headers.Authorization = `${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

adminApi.interceptors.response.use(
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

export { adminApi };
