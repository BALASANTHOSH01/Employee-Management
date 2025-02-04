import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout;