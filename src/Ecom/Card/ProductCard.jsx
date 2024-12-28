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
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useCart } from "../Cart/CartContext";
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Hook should be at the top level, unconditionally
  const { addToCart, removeFromCart, cart } = useCart();


  const isInCart = cart.some((item) => item.id === product.id); // Check if product is in cart

  // Handle the addition of the product to the cart
  const handleCart = () => {
    if (isInCart) {
      removeFromCart(product.id); // Remove from cart if already added
    } else {
      addToCart(product); // Add to cart if not already added
      toast("Item added to cart!");
    }
  };

  if (!product) {
    console.error("Product data is missing!");
    return null;
  }

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`); // Navigate to the product details page
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
        <ToastContainer />

        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
