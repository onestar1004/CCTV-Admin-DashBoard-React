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
const Authentication = Loadable(lazy(() => import('../routes/AuthenticationRoutes')));

const router = createHashRouter([
  {
    path: '/',
    element: <Authentication><Layout /></Authentication>,
    children: [
      {
        path: '/',
        element: <Authentication><DashBoard /></Authentication>,
      },
      {
        path: 'payment-history',
        element: <Authentication><PaymentHistory /></Authentication>,
      },
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
