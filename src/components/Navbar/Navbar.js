import React from 'react';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <div className='title-project-section'>
          <h1>Edu Kids Portal</h1>
        </div>
        <div className='user-container'>
          <span className="user-role">Admin</span>
          <FaUserCircle className="user-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
