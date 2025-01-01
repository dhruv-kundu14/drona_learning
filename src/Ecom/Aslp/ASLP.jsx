// import React, { useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import "./ASLP.css"; // Add some styles for CoursePage layout
// import ProductList from "../Card/ProductList";
// import Footer from "../Footer/Footer";
// import { products } from "../Card/data"; // Import product data

// const CoursePage = () => {

//     const [browseProducts, setBrowsedProducts] = useState(products);
  
//     // Handle filter logic
//     const handleFilter = (selectedFilters) => {
//       if (selectedFilters.includes("All Products")) {
//         setBrowsedProducts(products); // Show all products
//       } else {
//         const filtered = products.filter((product) =>
//           selectedFilters.includes(product.course)
//         );
//         setBrowsedProducts(filtered);
//       }
//     };
//   return (
//     <>
//       <div className="course-page-container">
//         <div className="hero">
//           <img
//             src="https://dhruv-kundu14.github.io/drona_learning/Icons/Background/2.png"
//             alt="Hero"
//           />
//         </div>

//         <div className="content-container">
//         <Sidebar onFilter={handleFilter} />
//           <div className="course-details">
//             <ProductList products={browseProducts} />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };


// export default CoursePage;


import React, { useState, useCallback } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./ASLP.css"; // Add some styles for CoursePage layout
import ProductList from "../Card/ProductList";
import Footer from "../Footer/Footer";
import { products } from "../Card/data"; // Import product data

const CoursePage = () => {
  const [browseProducts, setBrowsedProducts] = useState(products);
  const [filterName, setFilterName] = useState("Our Products");

  // Handle filter logic
  const handleFilter = useCallback((selectedFilters) => {
    if (selectedFilters.includes("All Products")) {
      setFilterName("Our Products");
      setBrowsedProducts(products); // Show all products
    } else {
      const filtered = products.filter((product) =>
        selectedFilters.includes(product.course)
      );
      setFilterName(selectedFilters[0]); // Update the header with the selected filter name
      console.log("selectedFilters[0]", selectedFilters[0]);
      setBrowsedProducts(filtered);
    }
  }, []);

  return (
    <>
      <div className="course-page-container">
        <div className="hero">
          <img
            src="https://dhruv-kundu14.github.io/drona_learning/Icons/Background/2.png"
            alt="Hero"
          />
        </div>

        <div className="content-container">
          <Sidebar onFilter={handleFilter} />
          <div className="course-details">
            <ProductList products={browseProducts} filterName={filterName} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
