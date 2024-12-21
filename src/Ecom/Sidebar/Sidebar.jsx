import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div className="sidebar-container">
        <nav className="sidebar">
          <ul>
            <li><a href="#home">All Products</a></li>
            <li><a href="#about">Assisted Self Learning Program (ASLP)</a></li>
            <li><a href="#services">Test Series Packages</a></li>
          </ul>
        </nav>
        <div className="fill">
        <h1>Filter By</h1>
        <div className="filter-container">
          <div className="filter-option">
            <input
              type="radio"
              id="option1"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={() => handleRadioChange("option1")}
            />
            <label htmlFor="option1" className="radio-label">
              Basic
            </label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="option2"
              value="option2"
              checked={selectedValue === "option2"}
              onChange={() => handleRadioChange("option2")}
            />
            <label htmlFor="option2" className="radio-label">
              Standard
            </label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="option3"
              value="option3"
              checked={selectedValue === "option3"}
              onChange={() => handleRadioChange("option3")}
            />
            <label htmlFor="option3" className="radio-label">
              Advanced
            </label>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Sidebar;
