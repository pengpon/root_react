import {adminApi} from "./axiosInstance";

const API_PATH = import.meta.env.VITE_API_PATH;

// API
// https://ec-course-api.hexschool.io
// [GET] /v2/api/{api_path}/admin/coupons
// [POST] /v2/api/{api_path}/admin/coupon
// [PUT] /v2/api/{api_path}/admin/coupon/{id}
// [DELETE] /v2/api/{api_path}/admin/coupon/{id}

export const fetchCoupons = (page = 1) =>
  adminApi.get(`/api/${API_PATH}/admin/coupons`, {
    params: {
      page: page,
    },
  });

export const createCoupon = (data) =>
  adminApi.post(`/api/${API_PATH}/admin/coupon`, { data });

export const editCoupon = (id, data) =>
  adminApi.put(`/api/${API_PATH}/admin/coupon/${id}`, { data });

export const deleteCoupon = (id) =>
  adminApi.delete(`/api/${API_PATH}/admin/coupon/${id}`);
