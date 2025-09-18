import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faFlask } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <FontAwesomeIcon icon={faFlask} className="brand-icon" />
            <span className="brand-text">OM Chemicals</span>
          </Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          <Link to="/quality" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Quality & Safety
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

