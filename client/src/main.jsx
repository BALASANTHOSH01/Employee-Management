import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Auth/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import CreateEmployee from './components/Dashboard/CreateEmployee.jsx';
import DashboardLayout from './pages/Dashboard/DashboardLayout.jsx';
import Sucess from './components/reusableComponents/Sucess.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Register from './components/Auth/Register/Register.jsx';
import EmployeeListPage from './pages/Dashboard/EmployeeListPage.jsx';
import EditEmployee from './components/Dashboard/EditEmployee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path:"/dashboard",
    element:<DashboardLayout/>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/dashboard/done",
        element:<Sucess/>
      },
      {
        path:"/dashboard/create-employee",
        element:<CreateEmployee/>
      },
      {
        path:"/dashboard/employees-list",
        element:<EmployeeListPage/>
      },
      {
        path:"/dashboard/edit-employee/:email",
        element:<EditEmployee/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </RouterProvider>
)
