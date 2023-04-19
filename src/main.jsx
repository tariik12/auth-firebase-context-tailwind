import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';
import Order from './components/Order';
import PrivetRoutes from './components/Routes/PrivetRoutes';
import Profile from './components/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/profile',
        element:<PrivetRoutes><Profile /></PrivetRoutes>
      },
      {
        path:'/order',
        element:<PrivetRoutes><Order /></PrivetRoutes>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
