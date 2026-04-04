import {adminApi} from "./axiosInstance";

const API_PATH = import.meta.env.VITE_API_PATH;

// API
// https://ec-course-api.hexschool.io
// [GET] /v2/api/{api_path}/admin/orders
// [PUT] /v2/api/{api_path}/admin/order/{id}
// [DELETE] /v2/api/{api_path}/admin/order/{id}
// [DELETE] /v2/api/{api_path}/admin/orders/all

export const fetchOrders = (page = 1) =>
  adminApi.get(`/api/${API_PATH}/admin/orders`, {
    params: {
      page: page,
    },
  });


export const editOrder = (id, data) =>
  adminApi.put(`/api/${API_PATH}/admin/order/${id}`, { data });

export const deleteOrder = (id) =>
  adminApi.delete(`/api/${API_PATH}/admin/order/${id}`);

export const deleteAllOrders = () =>
  adminApi.delete(`/api/${API_PATH}/admin/orders/all`);
