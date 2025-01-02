import React from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard"; // Adjust the path based on your file structure

const ProductList = ({ products, filterName }) => {
  if (!products || products.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h5" color="textSecondary">
          No products match your criteria.
        </Typography>
      </div>
    );
  }

  // Set the filter name and description based on the filter
  let fname = filterName || "Our Products";
  if (filterName === "ASLP") {
    fname = "Assisted Self Learning Program (ASLP)";
  } else if (filterName === "Test Series") {
    fname = "Test Series Packages";
  }

  // Description based on the selected filter
  let fdesc =
    "All the skills you need in one place. Assisted Self Learning, Test Series Packages, and Worksheets for Class VI to XII for CBSE, ICSE, and State Syllabus.";
  
  if (filterName === "ASLP") {
    fdesc =
      "The Assisted Self-Learning Program (ASLP) at Drona Learning Academy is a unique educational approach designed to empower students through self-paced learning with the support of expert guidance";
  } else if (filterName === "Test Series") {
    fdesc = "Test Series Packages for class VI to XII";
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* Heading and Description */}
      <Typography variant="h3" align="center">
        {fname}
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        {fdesc}
      </Typography>
      
      {/* Grid for displaying products */}
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
