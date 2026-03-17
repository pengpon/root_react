import { lazy } from 'react';

// Layouts
const Layout = lazy(() => import('../layouts/Layout'));

// Views
const Index = lazy(() => import('../views/Index'));
const ProductList = lazy(() => import('../views/ProductList'));
const ProductItem = lazy(() => import('../views/ProductItem'));
const ArticleList = lazy(() => import('../views/ArticleList'));
const ArticlePost = lazy(() => import('../views/ArticlePost'));
const Checkout = lazy(() => import('../views/Checkout'));
const Payment = lazy(() => import('../views/Payment'));
const PaymentSuccess = lazy(() => import('../views/PaymentSuccess'));
const Order = lazy(() => import('../views/Order'));
const About = lazy(() => import('../views/About'));
const NotFound = lazy(() => import('../views/NotFound'));

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
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'product/:id',
        element: <ProductItem />,
      },
      {
        path: 'posts',
        element: <ArticleList />,
      },
      {
        path: 'post/:id',
        element: <ArticlePost />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'payment/:id',
        element: <Payment />,
      },
      {
        path: 'payment/thanks',
        element: <PaymentSuccess />,
      },
      {
        path: 'order/:id',
        element: <Order />,
      },
      {
        path: 'origin',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
