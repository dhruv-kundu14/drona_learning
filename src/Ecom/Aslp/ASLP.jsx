import React, { useState, useCallback } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./ASLP.css"; // Add some styles for CoursePage layout
import ProductList from "../Card/ProductList";
import Footer from "../Footer/Footer";
import { products } from "../Card/data"; // Import product data

const CoursePage = () => {
  const baseUrl = process.env.REACT_APP_IMG_URL;
  const [browseProducts, setBrowsedProducts] = useState(products);
  const [filterName, setFilterName] = useState("Our Products");

  // Map filter names to corresponding hero images
  const heroImageMap = {
    "Our Products": `${baseUrl}/Icons/Ecom/product.png`,
    ASLP: `${baseUrl}/Icons/Ecom/aslp.png`,
    "Test Series": `${baseUrl}/Icons/Ecom/test.jpg`,
  };

  const heroImage = heroImageMap[filterName] || heroImageMap["Our Products"]; 

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
      setBrowsedProducts(filtered);
    }
  }, []);

  return (
    <>
      <div className="course-page-container">
        <div className="hero">
          <img src={heroImage} alt="Hero" />
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
