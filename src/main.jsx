import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import CustomerList from './Components/CustomerList.jsx';
import TrainingList from './Components/TrainingList.jsx';
import ShowCalendar from './ShowCalendar.jsx';
// import allEvents from './Components/TrainingList.jsx' , does not work



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [                       // children are nested routes with a route
      {
        element: <CustomerList />,
        index: true                   // index route does not need any path
      },
      {
        path: "TrainingList",                // path can be defined relative to the parent path
        element: <TrainingList />,
      },
      {
        path: "ShowCalendar",
        element: <ShowCalendar /> //events={allEvents} />, // pass the events to the calendar component, does not work
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
