import { lazy } from 'react';
// Layouts
const Layout = lazy(() => import('../layouts/Layout'));

// Views
const Index = lazy(() => import('../views/Index'));
const Products = lazy(() => import('../views/Products'));
const ProductForm = lazy(() => import('../views/ProductForm'));
const Coupons = lazy(() => import('../views/Coupons'));
const CouponEdit = lazy(() => import('../views/CouponEdit'));
const Articles = lazy(() => import('../views/Articles'));
const ArticleEdit = lazy(() => import('../views/ArticleEdit'));
const Login = lazy(() => import('../views/Login'));

const routes = [
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
        path: '/coupon/edit/:id',
        element: <CouponEdit />,
      },
      {
        path: '/articles',
        element: <Articles />,
      },
      {
        path: '/article/edit/:id',
        element: <ArticleEdit />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
];

export default routes;
