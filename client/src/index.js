import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Instructor from './pages/Instructor';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SkiLesson from './pages/SkiLesson';
import Client from './pages/Client';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/ski-lessons",
    element: <SkiLesson/>,
  },
  {
    path: "/instructor",
    element: <Instructor/>,
  },
  {
    path: "/client",
    element: <Client/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
