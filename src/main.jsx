import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './Layout/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './loader/cartProductsLoader.js';
import Checkout from './components/Checkout/Checkout.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Shop />,
        loader: () => fetch('http://localhost:5000/totalProducts')
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: cartProductsLoader
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path: '/inventory',
        element: <Inventory />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
