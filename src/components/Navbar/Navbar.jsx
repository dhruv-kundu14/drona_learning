// import React from "react";
// import { Link } from "react-router-dom";  // Import Link from react-router-dom
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src ="https://dhruv-kundu14.github.io/drona_learning/Icons/CompanyLogo/Drona.jpeg"
//          alt="Drona Learning Solutions"
//          style={{ width: 70, marginRight: 10, cursor: "pointer" }}/>
//       </div>
//       <div className="nav-font">
//         <h1>Drona Learning Solution</h1>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/drona_learning">Home</Link></li>  
//         <li><Link to="/about">About</Link></li> 
//         <li><Link to="/courses">Courses</Link></li> 
//         <li><Link to="/selflearning">SelfLearning</Link></li>
//         <li><Link to="/careers">Careers</Link></li> 
//         <li><Link to="/contact">Contact Us</Link></li>
//       </ul>
//       <div className="navbar-button">
//         <button>Test Series</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger floating box after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {!isScrolled ? (
        <>
          <div className="navbar-logo">
            <img
              src="https://dhruv-kundu14.github.io/drona_learning/Icons/CompanyLogo/Drona.jpeg"
              alt="Drona Learning Solutions"
              style={{ width: 90, marginLeft: 10, cursor: "pointer" }}
            />
          
          <div className="nav-font">
            <h1>Drona Learning Solution</h1>
          </div>
          </div>
        </>
      ) : null}

      <ul className="navbar-links">
        <li>
          <Link to="/drona_learning">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/selflearning">SelfLearning</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
