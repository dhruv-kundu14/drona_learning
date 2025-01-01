// import React from "react";
// import { Grid, Typography } from "@mui/material";
// import ProductCard from "./ProductCard"; // Adjust the path based on your file structure

// const ProductList = ({ products }) => {
//   if (!products || products.length === 0) {
//     return (
//       <div style={{ padding: "20px", textAlign: "center" }}>
//         <Typography variant="h5" color="textSecondary">
//           No products match your criteria.
//         </Typography>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <Typography variant="h3" align="center">
//         Our Products
//       </Typography>
//       <Typography variant="h6" align="center" paragraph>
//         All the skills you need in one place. Assisted Self Learning, Test
//         Series Packages, and Worksheets for Class VI to XII for CBSE, ICSE, and
//         State Syllabus.
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {products.map((product) => (
//           <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//             <ProductCard product={product} />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };


// export default ProductList;

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

  let fname = "Our Products";
  if (filterName === "ASLP") {
    fname = "Assisted Self Learning Program (ASLP)";
  } else if (filterName === "Test Series") {
    fname = "Test Series Packages";
  }

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h3" align="center">
        {fname || "Our Products"}
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        All the skills you need in one place. Assisted Self Learning, Test
        Series Packages, and Worksheets for Class VI to XII for CBSE, ICSE, and
        State Syllabus.
      </Typography>
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
 