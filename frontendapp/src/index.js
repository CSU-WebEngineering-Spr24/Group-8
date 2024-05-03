import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Main layout component
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
// import Rockets from './components/Rockets';
import RocketIndex from './components/RocketIndex';
import CrewPage from './components/Crew';
// import History from './components/History';
// import Starlink from './components/Starlink';
import ErrorPage from './components/Error404'
import RocketIndividual from './components/RocketIndividual';
// AllRocketsPage
import AllRocketsPage from './components/AllRocketws';
import AllItemsPage from './components/AllItemsPage';
// cards
import RocketCard from './components/Cards/RocketCard';
import CapsuleCard from './components/Cards/CapsuleCard';
import DragonCard from './components/Cards/DragonCard';
import ShipsCard from './components/Cards/ShipsCard';
import ShipIndividual from './components/ShipIndividual';
import DragonIndividual from './components/DragonIndividual';
// HistoryTimeline
import HistoryTimeline from './components/History';
import Starlink from './components/Starlink';
// LaunchesPage
import LaunchesPage from './components/LaunchesPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      { 
        path: "",  
        element: <Home />
      },
      {
        path: "rockets",
        element: <RocketIndex />,
      },
      // allrockets path
      {
        path: "allrockets",
        element: <AllItemsPage category="rockets" ItemComponent={RocketCard} />,
      },
      // allcapsules path
      {
        path: "allcapsules",
        element: <AllItemsPage category="capsules" ItemComponent={CapsuleCard} />,
      },
      // alldragons path
      {
        path: "alldragons",
        element: <AllItemsPage category="dragons" ItemComponent={DragonCard} />,
      },
      // allships path
      {
        path: "allships",
        element: <AllItemsPage category="ships" ItemComponent={ShipsCard} />,
      },
      // <Route path="/rockets/:id" component={RocketIndividual} />
      {
        path: "rockets/:id",
        element: <RocketIndividual />,
      },
      // <Route path="/ships/:id" component={ShipIndividual} />
      {
        path: "ships/:id",
        element: <ShipIndividual />,
      },
      // DragonIndividual path
      {
        path: "dragons/:id",
        element: <DragonIndividual />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
       {
        path: "crew",
        element: <CrewPage />,
      },
      
      {
        path: "history",
        element: <HistoryTimeline />,
      },
      
      {
        path: "starlink",
        element: <Starlink />,
      },

      {
        path: "launches",
        element: <LaunchesPage />,
      },
    ],
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
