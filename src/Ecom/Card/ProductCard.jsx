// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from "@mui/material";
// import "./ProductCard.css"; // Import the CSS file

// const ProductCard = ({ product }) => {
//   if (!product) {
//     console.error("Product data is missing!"); // Log the error if product is undefined
//     return null; // Return nothing if product is undefined
//   }

//   const handleCart = ()=>{
//     console.log("Add to cart clicked");
    
//   }
  

//   return (
//     <Card className="product-card">
//       <CardMedia
//         component="img"
//         alt={product.name}
//         className="product-image"
//         image={product.image}
//       />
//       <CardContent className="product-content">
//         <Typography variant="h6" className="product-title">
//           {product.name}
//         </Typography>
//         <Typography variant="body2" className="product-description">
//           {product.description}
//         </Typography>
//         <Typography variant="h5" className="product-price">
//           ₹{product.price}
//         </Typography>
//       </CardContent>
//       <CardActions className="product-actions">
//         <Button size="small" variant="contained" color="primary" onClick={handleCart}>
//           Add to Cart
//         </Button>
//         <Button size="small" variant="outlined" color="secondary" >
//           View Details
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default ProductCard;


import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  if (!product) {
    console.error("Product data is missing!"); // Log the error if product is undefined
    return null; // Return nothing if product is undefined
  }

  const handleCart = () => {
    console.log(`Add to cart clicked for: ${product.name}`);
  };

  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        alt={product.name || "Product Image"}
        className="product-image"
        image={product.image || "https://via.placeholder.com/200"}
      />
      <CardContent className="product-content">
        <Typography variant="h6" className="product-title">
          {product.name || "Unnamed Product"}
        </Typography>
        <Typography variant="body2" className="product-description">
          {product.description || "No description available."}
        </Typography>
        <Typography variant="h5" className="product-price">
          ₹{product.price || "N/A"}
        </Typography>
      </CardContent>
      <CardActions className="product-actions">
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleCart}
        >
          Add to Cart
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
