
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Timeline from '../pages/Timeline';
import Stats from '../pages/Stats';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      { 
        index: true, 
        element: <Home/>,
      }, 
      { 
        path: "/details/:id", 
        element: <Details/>,
      },
      { 
        path: "/timeline", 
        element: <Timeline/> 
      },
      { 
        path: "/stats", 
        element: <Stats/> 
      },
    ],
    errorElement: <ErrorPage />

  },
]);