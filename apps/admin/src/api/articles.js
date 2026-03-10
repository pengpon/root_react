import {adminApi} from "./axiosInstance";

const API_PATH = import.meta.env.VITE_API_PATH;

// API
// https://ec-course-api.hexschool.io
// [GET] /v2/api/{api_path}/admin/articles
// [GET] /v2/api/{api_path}/admin/article/{id}
// [POST] /v2/api/{api_path}/admin/article
// [PUT] /v2/api/{api_path}/admin/article/{id}
// [DELETE] /v2/api/{api_path}/admin/article/{id}

export const fetchArticles = (page = 1) =>
  adminApi.get(`/api/${API_PATH}/admin/articles`, {
    params: {
      page: page,
    },
  });

  export const fetchArticle = (id) =>
  adminApi.get(`/api/${API_PATH}/admin/article/${id}`);

export const createArticle = (data) =>
  adminApi.post(`/api/${API_PATH}/admin/article`, { data });

export const editArticle = (id, data) =>
  adminApi.put(`/api/${API_PATH}/admin/article/${id}`, { data });

export const deleteArticle = (id) =>
  adminApi.delete(`/api/${API_PATH}/admin/article/${id}`);
