import { frontApi } from './axiosInstance';

const API_PATH = import.meta.env.VITE_API_PATH;

// API
// https://ec-course-api.hexschool.io
// [GET] /v2/api/{api_path}/articles
// [GET] /v2/api/{api_path}/article/{id}

export const fetchArticles = (page = 1) =>
  frontApi.get(`/api/${API_PATH}/articles`, {
    params: {
      page: page,
    },
  });

export const fetchArticle = (id) => frontApi.get(`/api/${API_PATH}/article/${id}`);

