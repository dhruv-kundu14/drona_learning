import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const baseUrl = process.env.REACT_APP_IMG_URL;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  // Handle scroll event for scrolled navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Add 'scrolled' class after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false); // Close menu if it's open when scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo and Title */}
      {!isScrolled && (
        <div className="navbar-logo">
          <img
            src = {`${baseUrl}/Icons/CompanyLogo/Drona.png`}
            alt="Drona Learning Solutions"
            style={{ width: 80, marginLeft: 10, cursor: "pointer" }}
          />
          <div className="nav-font">
            <h1>Drona Learning Solution</h1>
          </div>
        </div>
      )}

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Collapsible Menu */}
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/drona_learning" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/courses" onClick={() => setIsMenuOpen(false)}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="/selflearning" onClick={() => setIsMenuOpen(false)}>
            SelfLearning
          </Link>
        </li>
        <li>
          <Link to="/careers" onClick={() => setIsMenuOpen(false)}>
            Careers
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
