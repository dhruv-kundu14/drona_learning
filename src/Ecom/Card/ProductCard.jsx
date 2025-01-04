
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
// import { useCart } from "../Cart/CartContext";
// import { ToastContainer, toast } from 'react-toastify';

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();
//   const { addToCart, removeFromCart, cart } = useCart();

//   const isInCart = cart.some((item) => item.id === product.id);

//   // Handle the addition of the product to the cart
//   const handleCart = () => {
//     if (isInCart) {
//       removeFromCart(product.id);
//     } else {
//       addToCart(product);
//       toast("Item added to cart!");
//     }
//   };

//   if (!product) {
//     console.error("Product data is missing!");
//     return null;
//   }

//   const handleViewDetails = () => {
//     navigate(`/product/${product.id}`);
//   };

//   return (
//     <Card className="product-card">
//       <CardMedia
//         component="img"
//         alt={product.name || "Product Image"}
//         className="product-image"
//         image={product.image || "https://via.placeholder.com/200"}
//       />
//       <CardContent className="product-content">
//         <Typography variant="h6" className="product-title">
//           {product.name || "Unnamed Product"}
//         </Typography>
//         <Typography variant="body2" className="product-description">
//           {product.description || "No description available."}
//         </Typography>
//         <Typography variant="h5" className="product-price">
//           ₹{product.price || "N/A"}
//         </Typography>
//       </CardContent>
//       <CardActions className="product-actions">
//         <Button
//           size="small"
//           variant="contained"
//           color="primary"
//           onClick={handleCart}
//         >
//           {isInCart ? "Remove from Cart" : "Add to Cart"}
//         </Button>
//         <ToastContainer />

//         <Button
//           size="small"
//           variant="outlined"
//           color="secondary"
//           onClick={handleViewDetails}
//         >
//           View Details
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default ProductCard;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useCart } from '../Cart/CartContext';
import { useAuth } from '../Login_Register/AuthContext'; // Import your authentication context
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cart } = useCart();
  const { isAuthenticated, loginRedirect } = useAuth(); // Destructure loginRedirect from the context

  const isInCart = cart.some((item) => item.id === product.id);

  // Handle the addition of the product to the cart
  const handleCart = () => {
    if (!isAuthenticated) {
      // If not authenticated, trigger loginRedirect to navigate to the login page
      loginRedirect(); // This should now work
      toast("Please log in first!");
      return;
    }

    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
      toast("Item added to cart!");
    }
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        alt={product.name || 'Product Image'}
        className="product-image"
        image={product.image || 'https://via.placeholder.com/200'}
      />
      <CardContent className="product-content">
        <Typography variant="h6" className="product-title">
          {product.name || 'Unnamed Product'}
        </Typography>
        <Typography variant="body2" className="product-description">
          {product.description || 'No description available.'}
        </Typography>
        <Typography variant="h5" className="product-price">
          ₹{product.price || 'N/A'}
        </Typography>
      </CardContent>
      <CardActions className="product-actions">
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleCart}
        >
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
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