import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/' className="nav-link">Home</NavLink>
      <NavLink to='/contact' className="nav-link">Contact</NavLink>
      <NavLink to='/about' className="nav-link" >About</NavLink>
      <NavLink to='/blogs' className="nav-link" >Blogs</NavLink>
      <NavLink to='/user' className="nav-link" >User</NavLink>
      <NavLink to='/add-blog' className="nav-link" >Add Blogs</NavLink>
    </nav>
  )
}

export default Navbar;
