import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className="nav flex-column bg-secondary bg-opacity-50 ps-5 pt-5 pb-5 sidenav">
        {/* Add team member */}
        <li className="nav-item mb-4">
          <NavLink className="nav-item text-dark" to="#">
            <button className="btn btn-primary w-75">Home</button>
          </NavLink>
        </li>
        {/* project portfolio dashboard */}
        <li className="nav-item mb-4">
          <NavLink className="nav-item text-dark"
            to="#">
            <button className="btn btn-primary w-75">Attendance</button>
          </NavLink>
        </li>
        {/* raise a resource request */}
        <li className="nav-item">
          <NavLink
            className="nav-tem text-dark"
            to="#"
          >
           <button className="btn btn-primary w-75">Logout</button>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar