import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ onFilter }) => {
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState(["All Products"]);

  const toggleSection = (section) => {
    if (section === "productType") {
      setIsProductTypeOpen(!isProductTypeOpen);
    }
  };

  const handleCheckboxChange = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter)
        : [...prevFilters, filter]
    );
  };

  const handleAllProductsSelection = () => {
    setSelectedFilters(["All Products"]);
    onFilter(["All Products"]);
  };

  // Apply filter based on the URL hash on initial render
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Get the hash without the '#'
    let initialFilter;
    if (hash === "ASLP") {
      initialFilter = ["ASLP"];
    } else if (hash === "TEST") {
      initialFilter = ["Test Series"];
    } else {
      initialFilter = ["All Products"];
    }
    setSelectedFilters(initialFilter); // Update local state
    onFilter(initialFilter); // Trigger parent filter logic
  }, [onFilter]); // Include onFilter as a dependency
  
  return (
    <div className="sidebar-container">
      <nav className="breadcrumb">
        <a href="/courses">Home</a> &gt; <a href="#P">All Products</a>
      </nav>

      <div className="browse-by">
        <h3>Browse by</h3>
        <ul>
          <li>
            <a href="#P" onClick={handleAllProductsSelection}>
              All Products
            </a>
          </li>
          <li>
            <a href="#ASLP" onClick={() => onFilter(["ASLP"])}>
              Assisted Self Learning Program (ASLP)
            </a>
          </li>
          <li>
            <a href="#TEST" onClick={() => onFilter(["Test Series"])}>
              Test Series Packages
            </a>
          </li>
        </ul>
      </div>

      <div className="filter-by">
        <h3>Filter by</h3>

        {/* Product Type Filter */}
        <div className="filter-section">
          <div
            className="filter-header"
            onClick={() => toggleSection("productType")}
          >
            <span>Product Type</span>
            <span>{isProductTypeOpen ? "−" : "+"}</span>
          </div>
          {isProductTypeOpen && (
            <div className="filter-options">
              <div>
              <label htmlFor="standard">Standard</label>
                <input
                  type="checkbox"
                  id="standard"
                  checked={selectedFilters.includes("Standard")}
                  onChange={() => handleCheckboxChange("Standard")}
                />
                
              </div>
              <div>
              <label htmlFor="advanced">Advanced</label>
                <input
                  type="checkbox"
                  id="advanced"
                  checked={selectedFilters.includes("Advanced")}
                  onChange={() => handleCheckboxChange("Advanced")}
                />
              
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
