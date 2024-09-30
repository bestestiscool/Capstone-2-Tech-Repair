import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { getAnimationClass } from '../utils/animationUtils';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-nav bg-light ${getAnimationClass('fadeIn')}`}>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shorts">Short Videos</Link></li>
        <li><Link to="/long-videos">Long Videos</Link></li>
        <li><Link to="/repair-cost-estimator">Cost Estimate</Link></li>
        <li><Link to="/portfolio">Projects</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
