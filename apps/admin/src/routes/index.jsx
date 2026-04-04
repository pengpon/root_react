import { lazy } from 'react';
import AdminGuard from '../components/guard/AdminGuard';

// Layouts
const Layout = lazy(() => import('../layouts/Layout'));

// Views
const Index = lazy(() => import('../views/Index'));
const Products = lazy(() => import('../views/Products'));
const ProductForm = lazy(() => import('../views/ProductForm'));
const CouponForm = lazy(() => import('../views/CouponForm'));
const ArticleForm = lazy(() => import('../views/ArticleForm'));
const Coupons = lazy(() => import('../views/Coupons'));
const Articles = lazy(() => import('../views/Articles'));
const Orders = lazy(() => import('../views/Orders'));
const OrderForm = lazy(() => import('../views/OrderForm'));
const Login = lazy(() => import('../views/Login'));

const routes = [
  {
    path: '/',
    element: <AdminGuard />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: '/products',
            element: <Products />,
          },
          {
            path: '/products/create',
            element: <ProductForm />,
          },
          {
            path: '/products/edit/:id',
            element: <ProductForm />,
          },
          {
            path: '/coupons',
            element: <Coupons />,
          },
          {
            path: '/coupons/create',
            element: <CouponForm />,
          },
          {
            path: '/coupons/edit/:id',
            element: <CouponForm />,
          },
          {
            path: '/articles',
            element: <Articles />,
          },
          {
            path: '/articles/create',
            element: <ArticleForm />,
          },
          {
            path: '/articles/edit/:id',
            element: <ArticleForm />,
          },
          {
            path: '/orders',
            element: <Orders />,
          },
          {
            path: '/orders/edit/:id',
            element: <OrderForm />,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
];

export default routes;
