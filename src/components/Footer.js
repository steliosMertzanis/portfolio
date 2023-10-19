import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-container">
      <Link to="/" className="footer-logo link">
        <FaLaptopCode className="footer-icon" />
        <div className="footer-title">Portfolio</div>
      </Link>
      <div className="website-rights">
        <p>&copy; Mertzanis Stelios</p>
      </div>
      <div className="contact-icons">
        <p>Contact</p>
        <div className="contact-icons-menu">
          <div className="email">
            <MdEmail className="icon" /> mertzanisst@gmail.com
          </div>
          <div className="tel">
            <BsFillTelephoneFill className="icon" /> 6984027679
          </div>
        </div>
      </div>
      <div className="design">
        <p className="designer-name">Designed by Mertzanis Stelios</p>
      </div>
    </div>
  );
}

export default Footer;
