import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import JobDetails from './Components/JobDetails/JobDetails';
import Aplyjob from './Components/Aplyjob/Aplyjob';
import ErrorPage from './Components/ErrorPage';
import Statics from './Components/Statics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    loader: ()=>fetch('data.json'),

    children: [
      {

        path: "/",
        element: <Home></Home>,
      },
      {

        path: "/detail",
        element: <p>about</p>,
      },
      {

        path: "/about",
        element: <p>about</p>,
      },
      {
        path: 'job-details/:id',
        element : <JobDetails/>
      },
      {
        path: '/apliedjob',
        element : <Aplyjob/>
      },
      {
        path: '/statistics',
        element : <Statics/>
      }


    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
