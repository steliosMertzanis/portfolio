import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
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
      <div className="social-icons">
        <p>Social Media</p>
        <div className="social-icons-menu">
          <Link
            className="social-icon-link link"
            to="/"
            target="_blank"
            aria-label="Facebook">
            <FaFacebook className="icon" />
          </Link>
          <Link
            className="social-icon-link link"
            to="/"
            target="_blank"
            aria-label="Instagram">
            <FaInstagram className="icon" />
          </Link>
          <Link
            className="social-icon-link link"
            to="/"
            target="_blank"
            aria-label="Youtube">
            <FaYoutube className="icon" />
          </Link>
          <Link
            className="social-icon-link link"
            to="/"
            target="_blank"
            aria-label="Twitter">
            <FaTwitter className="icon" />
          </Link>
          <Link
            className="social-icon-link link"
            to="/"
            target="_blank"
            aria-label="LinkedIn">
            <FaLinkedin className="icon" />
          </Link>
        </div>
      </div>
      <div className="design">
        <p className="designer-name">Designed by Mertzanis Stelios</p>
      </div>
    </div>
  );
}

export default Footer;
