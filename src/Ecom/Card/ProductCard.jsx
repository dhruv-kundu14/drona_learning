
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
// import { useCart } from '../Cart/CartContext';
// import { useAuth } from '../Login_Register/AuthContext'; // Import your authentication context
// import { ToastContainer, toast } from 'react-toastify';

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();
//   const { addToCart, removeFromCart, cart } = useCart();
//   const { isAuthenticated, loginRedirect } = useAuth(); // Destructure loginRedirect from the context

//   const isInCart = cart.some((item) => item.id === product.id);

//   // Handle the addition of the product to the cart
//   const handleCart = () => {
//     if (!isAuthenticated) {
//       // If not authenticated, trigger loginRedirect to navigate to the login page
//       loginRedirect(); // This should now work
//       toast("Please log in first!");
//       return;
//     }

//     if (isInCart) {
//       removeFromCart(product.id);
//     } else {
//       addToCart(product);
//       toast("Item added to cart!");
//     }
//   };

//   const handleViewDetails = () => {
//     navigate(`/product/${product.id}`);
//   };

//   return (
//     <Card className="product-card">
//       <CardMedia
//         component="img"
//         alt={product.name || 'Product Image'}
//         className="product-image"
//         image={product.image || 'https://via.placeholder.com/200'}
//       />
//       <CardContent className="product-content">
//         <Typography variant="h6" className="product-title">
//           {product.name || 'Unnamed Product'}
//         </Typography>
//         <Typography variant="body2" className="product-description">
//           {product.description || 'No description available.'}
//         </Typography>
//         <Typography variant="h5" className="product-price">
//           ₹{product.price || 'N/A'}
//         </Typography>
//       </CardContent>
//       <CardActions className="product-actions">
//         <Button
//           size="small"
//           variant="contained"
//           color="primary"
//           onClick={handleCart}
//         >
//           {isInCart ? 'Remove from Cart' : 'Add to Cart'}
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



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useCart } from "../Cart/CartContext";
import { useAuth } from "../Login_Register/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cart } = useCart();
  const { isAuthenticated } = useAuth(); // Removed loginRedirect
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const isInCart = cart.some((item) => item.id === product.id);

  // Handle cart action
  const handleCart = () => {
    if (!isAuthenticated) {
      setIsModalOpen(true); // Show modal if not logged in
      return;
    }

    if (isInCart) {
      removeFromCart(product.id);
      toast.info("Item removed from cart!");
    } else {
      addToCart(product);
      toast.success("Item added to cart!");
    }
  };

  // Handle modal actions
  const handleLoginRedirect = () => {
    setIsModalOpen(false); // Close modal
    navigate("/login"); // Redirect to login page
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card className="product-card">
      {/* Product Image */}
      <CardMedia
        component="img"
        alt={product.name || "Product Image"}
        className="product-image"
        image={product.image || "https://via.placeholder.com/200"}
      />

      {/* Product Details */}
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

      {/* Actions (Cart and Details Buttons) */}
      <CardActions className="product-actions">
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleCart}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </CardActions>

      {/* Modal for Login Alert */}
      <Dialog open={isModalOpen} onClose={handleModalClose}>
        <DialogTitle>Login Required</DialogTitle>
        <DialogContent>
          You need to log in to add items to the cart. Would you like to log in now?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleLoginRedirect} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast Notifications */}
      <ToastContainer />
    </Card>
  );
};

export default ProductCard;
