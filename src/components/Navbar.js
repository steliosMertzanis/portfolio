import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="logo-menu-section">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <FaLaptopCode className="navbar-icon" />
          <div className="title">Portfolio</div>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <ul className={click ? "menu active" : "menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
