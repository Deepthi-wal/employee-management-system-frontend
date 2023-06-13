import React from 'react'
import logo from '../../images/download copy.jpeg'
import { useSelector } from 'react-redux'
import "./Header.css"

const Header = () => {
  //get state from store
  let {userObj}=useSelector(state=>state.login)

  return (
    <div>
        <ul className='nav justify-content-end bg-dark pe-5 header d-flex justify-content-between'>

        <div className='ms-5 d-flex'>
          {/* logo */}
        <li className='nav-item'>
          <img src={logo} alt='west agile labs logo' height="35px" width="35px" className='mt-1 me-4'></img>
        </li>
        {/* title */}
        <li className='nav-item mt-2'>
          <p className='text-white fw-bold'>Employee Management System</p>
        </li>
        </div>
        <div className='d-flex'>
        {/* user email */}
        <li className='nav-item pt-2'>
          <p className='text-white fw-bold '>{userObj.email}</p>
        </li>
      </div>
      </ul>
    </div>
  )
}

export default Header