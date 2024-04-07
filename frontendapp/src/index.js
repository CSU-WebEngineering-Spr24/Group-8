import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Main layout component
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Rockets from './components/Rockets';
import Crew from './components/Crew';
import History from './components/History';
import Starlink from './components/Starlink';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "home",  
        element: <Home />
      },
      {
        path: "rockets",
        element: <Rockets />,
      },
      {
        path: "crew",
        element: <Crew />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "starlink",
        element: <Starlink />,
      },
      // You can add more nested routes here if needed
    ],
  },
  // If you have more top-level routes, they can be added here
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
