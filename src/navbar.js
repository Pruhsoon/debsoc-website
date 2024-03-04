import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        DEBSOC
      </Link>

      <a href="#" className={`toggle-button ${isActive ? 'active' : ''}`} onClick={handleToggle} aria-expanded={isActive}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      <ul className={`navbar-links ${isActive ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutUs">About Us</Link></li>
        <li><Link to="/pd">PD</Link></li>
        <li><Link to="/mun">MUN</Link></li>
        <li><Link to="/colloq">Colloquium</Link></li>
      </ul>
    </nav>
  );
}
