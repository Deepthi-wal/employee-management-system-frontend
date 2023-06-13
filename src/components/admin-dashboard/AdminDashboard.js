import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import './AdminDashboard.css'
import Navbar from '../navbar/Navbar'

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <div style={{minHeight: "85vh"}}>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AdminDashboard