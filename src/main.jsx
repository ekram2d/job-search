import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <p>error</p>,

    children:[{

      path: "/",
      element: <Home></Home>,
    }]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
