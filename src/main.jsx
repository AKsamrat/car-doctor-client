import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Roots from './Root/Roots';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import CheckOut from './Pages/CheckOut/CheckOut';
import Bookings from './bookings/Bookings';
import PrivateRoute from './PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <Bookings />,
          </PrivateRoute>
        ),
      },
      {
        path: '/checkOut/:id',
        element: (
          <PrivateRoute>
            <CheckOut />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:7000/services/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
