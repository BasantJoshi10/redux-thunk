import React from 'react'
import { useNavigate } from 'react-router'
import navbar from '../navbar/navbar-module.css'

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
    navigate('/login');
  };
  return (
    <nav className="navbar">
        <div className="logo">Joshi's News</div>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
        </ul>

        <button className="login-btn1" onClick={handleLogin}>Login</button>
      </nav>
  )
}

export default Navbar;