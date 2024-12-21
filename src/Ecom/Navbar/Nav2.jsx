import React, { useState } from "react";
import "./Nav2.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="nav2">
      {/* Left Icon */}
      <div className="nav2-icon">
        <img src="https://dhruv-kundu14.github.io/drona_learning/Icons/CompanyLogo/Drona.png" alt="Logo" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Center Links */}
      <ul className={`nav2-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="/course/aslp">DronaPlus</a></li>
        <li><a href="/about">Plans-N-Pricing</a></li>
        <li><a href="/services">Buy-Course</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Right Icons */}
      <div className="nav2-icons">
        {/* Cart Icon */}
        <div className="nav2-cart" onClick={toggleCart}>
          <img src="/Icons/Ecom/cart.png" alt="Cart Icon" className="cart-icon" />
          {isCartOpen && (
            <div className="cart-dropdown">
              <ul>
                <li>Item 1 - $10</li>
                <li>Item 2 - $20</li>
                <li>Item 3 - $30</li>
                <li><a href="/cart">View Cart</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Login Icon */}
        <div className="nav2-login">
          <img
            src="/path-to-login-icon.png"
            alt="Login Icon"
            onClick={toggleDropdown}
            className="login-icon"
          />
          {isDropdownOpen && (
            <div className="dropdown">
              <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
