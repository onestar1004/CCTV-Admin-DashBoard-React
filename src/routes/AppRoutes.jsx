import React, { lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

// project imports
import Layout from 'components/MainLayout';
import Loadable from 'components/Loadable';

// import DashBoard from 'pages/DashBoard';

// dashboard routing
const DashBoard = Loadable(lazy(() => import('pages/DashBoard')));
const PaymentHistory = Loadable(lazy(() => import('pages/PaymentHistory')));
const Login = Loadable(lazy(() => import('pages/Auth/Login')));
const Register = Loadable(lazy(() => import('pages/Auth/Register')));

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <DashBoard />,
      },
      {
        path: 'dashboard',
        element: <DashBoard />,
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />,
      },
      // {
      //   path: 'login',
      //   element: <Login />
      // },
      // {
      //   path: 'register',
      //   element: <Register />
      // }
    ],
  },
  {    
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  }
]);

function AppRoutes() {
  return (
    <RouterProvider router={router} />
  );
}

export default AppRoutes;
