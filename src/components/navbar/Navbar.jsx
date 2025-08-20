import React from 'react'
import "./navbar.css"
import {Person, Search} from "@mui/icons-material"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarLeft">
          <a href=".">
            <img src="assets/logo.png" alt="" className="navbarLogo" />
          </a>
        </div>
        <div className="navbarCenter">
          <Search className='navbarSearchIcon'/>
          <input type="text" placeholder="What're you craving for?" className="navbarSearchInput" />
        </div>
        <div className="navbarRight">
          <ul className="navbarTabs">
            <li className="navbarTab">
              <Link to="/" className='navbarTabLink'>
                <span className="navbarTabText">Home</span>
              </Link>
            </li>
            <li className="navbarTab">
              <Link to="/about" className='navbarTabLink'>
                <span className="navbarTabText">About</span>
              </Link>
            </li>
            <li className="navbarTab">
              <Link to="/login" className='navbarTabLink'>
                <span className="navbarTabText">Login</span>
              </Link>
            </li>
            <div className="navbarAccount">
              <Person className='navbarTabIcon' fontSize='large' />
            </div>
            <li className="navbarTab">
              <Link to="/service" className='navbarTabLink'>
                <span className="navbarTabText">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  )
}
