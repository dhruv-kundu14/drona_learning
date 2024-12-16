import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Nav2.css";

const Nav2 = () => {
  return (
    <nav className="nav2">
      <div className="nav2-logo">
        <img src ="https://dhruv-kundu14.github.io/drona_learning/Icons/CompanyLogo/Drona.png"
         alt="Drona Learning Solutions"
         style={{ width: 70, marginRight: 10, cursor: "pointer" }}/>
      </div>
      <div className="nav2-font">
        <h1>Drona Learning Solution</h1>
      </div>
      <ul className="nav2-links">
        <li><Link to="/drona_learning">Home</Link></li>  
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/courses">Courses</Link></li> 
        <li><Link to="/selflearning">SelfLearning</Link></li>
        <li><Link to="/careers">Careers</Link></li> 
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="nav2-button">
        <button>Test Series</button>
      </div>
    </nav>
  );
};

export default Nav2;