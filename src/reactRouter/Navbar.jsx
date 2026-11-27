import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
      <>
      <nav className="navbar">
      <h2 className="logo">MyWebsite</h2>
      <div className="nav-links">
        <NavLink className={({isActive})=>(isActive)?'active':''} to="/">Home</NavLink>
        <NavLink className={({isActive})=>(isActive)?'active':''} to="/about">About</NavLink>
        <NavLink className={({isActive})=>(isActive)?'active':''} to="/contact">Contact</NavLink>
        <NavLink className={({isActive})=>(isActive)?'active':''} to="/products"> Products</NavLink>
      </div>
    </nav> 
    <Outlet/>
      </>
  
  );
};

export default Navbar;