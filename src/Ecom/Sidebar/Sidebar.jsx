// import React, { useState } from "react";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const [isProductTypeOpen, setIsProductTypeOpen] = useState(true);
//   const [isPriceOpen, setIsPriceOpen] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState([]);

//   const toggleSection = (section) => {
//     if (section === "productType") {
//       setIsProductTypeOpen(!isProductTypeOpen);
//     } else if (section === "price") {
//       setIsPriceOpen(!isPriceOpen);
//     }
//   };

//   const handleCheckboxChange = (filter) => {
//     setSelectedFilters((prevFilters) =>
//       prevFilters.includes(filter)
//         ? prevFilters.filter((item) => item !== filter)
//         : [...prevFilters, filter]
//     );
//   };

//   return (
//     <div className="sidebar-container">
//       <nav className="breadcrumb">
//         <a href="#">Home</a> &gt; <a href="#">All Products</a>
//       </nav>
//       <div className="browse-by">
//         <h3>Browse by</h3>
//         <ul>
//           <li><a href="#">All Products</a></li>
//           <li><a href="#">Assisted Self Learning Program (ASLP)</a></li>
//           <li><a href="#">Test Series Packages</a></li>
//         </ul>
//       </div>
//       <div className="filter-by">
//         <h3>Filter by</h3>
//         <div className="filter-section">
//           <div
//             className="filter-header"
//             onClick={() => toggleSection("productType")}
//           >
//             <span>Product type</span>
//             <span>{isProductTypeOpen ? "−" : "+"}</span>
//           </div>
//           {isProductTypeOpen && (
//             <div className="filter-options">
//               <div>
//                 <input
//                   type="checkbox"
//                   id="aslp"
//                   checked={selectedFilters.includes("ASLP")}
//                   onChange={() => handleCheckboxChange("ASLP")}
//                 />
//                 <label htmlFor="aslp">Assisted Self Learning Program (ASLP)</label>
//               </div>
//               <div>
//                 <input
//                   type="checkbox"
//                   id="test-series"
//                   checked={selectedFilters.includes("Test Series")}
//                   onChange={() => handleCheckboxChange("Test Series")}
//                 />
//                 <label htmlFor="test-series">Test Series Packages</label>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="filter-section">
//           <div
//             className="filter-header"
//             onClick={() => toggleSection("price")}
//           >
//             <span>Price</span>
//             <span>{isPriceOpen ? "−" : "+"}</span>
//           </div>
//           {isPriceOpen && (
//             <div className="filter-options">
//               <p>Price filter functionality can go here.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




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
    if (hash === "ASLP") {
      setSelectedFilters(["ASLP"]);
      onFilter(["ASLP"]);
    } else if (hash === "TEST") {
      setSelectedFilters(["Test Series"]);
      onFilter(["Test Series"]);
    } else {
      setSelectedFilters(["All Products"]);
      onFilter(["All Products"]);
    }
  }, [onFilter]);

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
                <input
                  type="checkbox"
                  id="basic"
                  checked={selectedFilters.includes("Basic")}
                  onChange={() => handleCheckboxChange("Basic")}
                />
                <label htmlFor="basic">Basic</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="standard"
                  checked={selectedFilters.includes("Standard")}
                  onChange={() => handleCheckboxChange("Standard")}
                />
                <label htmlFor="standard">Standard</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="advanced"
                  checked={selectedFilters.includes("Advanced")}
                  onChange={() => handleCheckboxChange("Advanced")}
                />
                <label htmlFor="advanced">Advanced</label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
