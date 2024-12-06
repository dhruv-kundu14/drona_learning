import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src ="https://dhruv-kundu14.github.io/drona_learning/Icons/CompanyLogo/Drona.jpeg"
         alt="Drona Learning Solutions"
         style={{ width: 70, marginRight: 10, cursor: "pointer" }}/>
      </div>
      <div className="nav-font">
        <h1>Drona Learning Solution</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/drona_learning">Home</Link></li>  
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/courses">Courses</Link></li> 
        <li><Link to="/selflearning">SelfLearning</Link></li>
        <li><Link to="/careers">Careers</Link></li> 
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="navbar-button">
        <button>Test Series</button>
      </div>
    </nav>
  );
};

export default Navbar;
