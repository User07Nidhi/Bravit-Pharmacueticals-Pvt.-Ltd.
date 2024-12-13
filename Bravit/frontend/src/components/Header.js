import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../medicine.png'; // Use the correct relative path

const Header = () => {
  return (
    <header>
      <div className="navbar">
        {/* Logo Image */}
        <Link to="/">
          <img src={logo} alt="Bravit Logo" className="logo" />
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
