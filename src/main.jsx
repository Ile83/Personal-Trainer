import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import { RouterProvider } from 'react-router-dom';
import CustomerList from './Components/CustomerList.jsx';
import TrainingList from './Components/TrainingList.jsx';


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
        path: "Contact",
        element: <Contact />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
