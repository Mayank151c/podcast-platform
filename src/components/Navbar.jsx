import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar(props) {
  const isActiveLink = ({ isActive }) => (isActive ? 'active' : 'inactive');
  return (
    <nav>
      <div className="blurShadow" />
      <div className="navRoutes">
        <NavLink to="/signup" className={isActiveLink}>
          Signup
        </NavLink>
        <NavLink to="/podcast" className={isActiveLink}>
          Podcasts
        </NavLink>
        <NavLink to="/start" className={isActiveLink}>
          Start A Podcast
        </NavLink>
        <NavLink to="/profile" className={isActiveLink}>
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
