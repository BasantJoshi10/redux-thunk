import React from 'react'
import navbar from '../navbar/navbar-module.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">MyProject</div>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
        </ul>

        <button className="login-btn">Login</button>
      </nav>
  )
}

export default Navbar;