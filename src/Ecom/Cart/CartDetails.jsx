// import React, { useState } from "react";
// import { Box, Typography, IconButton, Button, TextField, Divider } from "@mui/material";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "./CartDetails.css";

// const CartComponent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const initialCart = JSON.parse(query.get("data") || "[]");

//   const [cart, setCart] = useState(
//     initialCart.map((item) => ({
//       ...item,
//       price: Number(item.price.replace(/,/g, "")) || 0, // Convert price to number
//       originalPrice: Number(item.originalPrice.replace(/,/g, "")) || 0, // Convert original price to number
//       quantity: Number(item.quantity) || 1, // Default quantity to 1
//     }))
//   );
//   const [promoCode, setPromoCode] = useState("");
//   const [discount, setDiscount] = useState(0);

//   // Handle removing an item from the cart
//   const handleRemoveItem = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//   };

//   const handleCheckout = () => {
//     const totalPrice = cart.reduce((total, item) => {
//       const itemPrice = item.price * item.quantity;
//       return total + itemPrice;
//     }, 0);

//     navigate("/checkout", { state: { cart, totalPrice } });
//   };

//   // Apply promo code and calculate discount
//   const applyPromoCode = () => {
//     if (promoCode === "promoNEW100") {
//       setDiscount(0.3); // 30% off for the promo code
//     } else {
//       setDiscount(0);
//     }
//   };

//   const calculateMathScienceDiscount = () => {
//     const hasMath = cart.some((item) => item.name.includes("Mathematics"));
//     const hasScience = cart.some((item) => item.name.includes("Science"));
  
//     // Apply 20% discount if both Math and Science are present
//     if (hasMath && hasScience) {
//       return 0.2; // 20% discount
//     }
//     return 0; // No discount
//   };
  
//   const totalPrice = cart.reduce((total, item) => {
//     const mathScienceDiscount = calculateMathScienceDiscount();
//     const itemPrice = item.price * item.quantity;
//     const discountAmount = mathScienceDiscount > 0 ? itemPrice * mathScienceDiscount : 0;
//     const promoCodeDiscount = itemPrice * discount;
//     return total + itemPrice - discountAmount - promoCodeDiscount;
//   }, 0);

//   return (
//     <Box className="cart-container">
//       {/* Left Section - Cart Details */}
//       <Box className="cart-details">
//         <Typography variant="h6" gutterBottom>
//           My Cart
//         </Typography>
//         <Divider />
//         {cart.length > 0 ? (
//           cart.map((item) => (
//             <Box key={item.id} className="cart-item">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="cart-item-image"
//               />
//               <Box className="cart-item-details">
//                 <Typography variant="subtitle1" className="cart-item-name">
//                   {item.name}
//                 </Typography>
//                 <Typography variant="body2" className="cart-item-price">
//                   ₹{item.originalPrice.toFixed(2)}
//                 </Typography>
//                 <Typography variant="h6" className="cart-item-actual-price">
//                   ₹{item.price.toFixed(2)}
//                 </Typography>
//               </Box>
//               {/* <Box className="cart-item-actions">
//                 <Button variant="outlined" size="small">
//                   -
//                 </Button>
//                 <TextField
//                   value={item.quantity}
//                   size="small"
//                   sx={{ width: "50px", marginX: 1 }}
//                 />
//                 <Button variant="outlined" size="small">
//                   +
//                 </Button>
//               </Box> */}
//               <Typography variant="h6" className="cart-item-total-price">
//                 ₹{(item.price * item.quantity).toFixed(2)}
//               </Typography>
//               <IconButton
//                 color="error"
//                 className="cart-item-remove"
//                 onClick={() => handleRemoveItem(item.id)}
//               >
//                 <DeleteOutlineIcon />
//               </IconButton>
//             </Box>
//           ))
//         ) : (
//           <Typography className="cart-empty-message">
//             Your cart is empty!
//           </Typography>
//         )}
//         <Divider />
//         <Typography sx={{ marginY: 2, color: "blue", cursor: "pointer" }} onClick={applyPromoCode}>
//           Enter a promo code
//         </Typography>
//         <TextField
//           label="Promo Code"
//           variant="outlined"
//           value={promoCode}
//           onChange={(e) => setPromoCode(e.target.value)}
//           sx={{ marginY: 2 }}
//         />
//       </Box>

//       {/* Right Section - Order Summary */}
//       <Box className="order-summary">
//         <Typography variant="h6" gutterBottom>
//           Order Summary
//         </Typography>
//         <Divider />
//         <Box className="subtotal">
//           <Typography>Subtotal</Typography>
//           <Typography>
//             ₹{totalPrice.toFixed(2)}
//           </Typography>
//         </Box>
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           className="checkout-button"

//           onClick={handleCheckout}
//         >
//           Checkout
//         </Button>
//         <Typography variant="caption" className="checkout-secure">
//           🔒 Secure Checkout
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default CartComponent;



import React, { useState } from "react";
import { Box, Typography, IconButton, Button, TextField, Divider } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CartDetails.css";
import axios from "axios";

const CartComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialCart = JSON.parse(query.get("data") || "[]");

  const [cart, setCart] = useState(
    initialCart.map((item) => ({
      ...item,
      price: Number(item.price.replace(/,/g, "")) || 0, // Convert price to number
      originalPrice: Number(item.originalPrice.replace(/,/g, "")) || 0, // Convert original price to number
      quantity: Number(item.quantity) || 1, // Default quantity to 1
    }))
  );
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // const handleCheckout = () => {
  //   const totalPrice = cart.reduce((total, item) => {
  //     const itemPrice = item.price * item.quantity;
  //     return total + itemPrice;
  //   }, 0);

  //   navigate("/checkout", { state: { cart, totalPrice } });
  // };

  // Apply promo code and calculate discount
  
  const applyPromoCode = () => {
    if (promoCode === "promoNEW100") {
      setDiscount(0.3); // 30% off for the promo code
    } else {
      setDiscount(0);
    }
  };

  const calculateMathScienceDiscount = () => {
    const hasMath = cart.some((item) => item.name.includes("Mathematics"));
    const hasScience = cart.some((item) => item.name.includes("Science"));
  
    // Apply 20% discount if both Math and Science are present
    if (hasMath && hasScience) {
      return 0.2; // 20% discount
    }
    return 0; // No discount
  };

  const handlePayment = async () => {
    try {
      // Check if Razorpay SDK is loaded
      if (!window.Razorpay) {
        alert("Razorpay SDK failed to load. Please refresh the page.");
        return;
      }

      // Create order in backend
      const response = await axios.post("https://drona-backend-61ib.onrender.com/common-backend/payment/create-order", {
        amount: totalPrice * 100, 
      });

      const { id, currency, amount: orderAmount } = response.data;

      // Razorpay options
      const options = {
        key: process.env.RAZORPAY_KEY_ID, // Environment variable
        amount: orderAmount,
        currency,
        name: "Drona Learning",
        description: "Payment for your order",
        order_id: id,
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
          navigate("/success", { state: { cart, totalPrice } });
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "1234567890",
        },
        notes: {
          cartDetails: JSON.stringify(cart),
        },
        theme: {
          color: "#F37254",
        },
      };

      // Open Razorpay payment modal
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("An error occurred while processing the payment. Please try again.");
    }
  };
  
  const totalPrice = cart.reduce((total, item) => {
    const mathScienceDiscount = calculateMathScienceDiscount();
    const itemPrice = item.price * item.quantity;
    const discountAmount = mathScienceDiscount > 0 ? itemPrice * mathScienceDiscount : 0;
    const promoCodeDiscount = itemPrice * discount;
    return total + itemPrice - discountAmount - promoCodeDiscount;
  }, 0);

  return (
    <Box className="cart-container">
      {/* Left Section - Cart Details */}
      <Box className="cart-details">
        <Typography variant="h6" gutterBottom>
          My Cart
        </Typography>
        <Divider />
        {cart.length > 0 ? (
          cart.map((item) => (
            <Box key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <Box className="cart-item-details">
                <Typography variant="subtitle1" className="cart-item-name">
                  {item.name}
                </Typography>
                <Typography variant="body2" className="cart-item-price">
                  ₹{item.originalPrice.toFixed(2)}
                </Typography>
                <Typography variant="h6" className="cart-item-actual-price">
                  ₹{item.price.toFixed(2)}
                </Typography>
              </Box>
              <Typography variant="h6" className="cart-item-total-price">
                ₹{(item.price * item.quantity).toFixed(2)}
              </Typography>
              <IconButton
                color="error"
                className="cart-item-remove"
                onClick={() => handleRemoveItem(item.id)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          ))
        ) : (
          <Typography className="cart-empty-message">
            Your cart is empty!
          </Typography>
        )}
        <Divider />
        <Typography sx={{ marginY: 2, color: "blue", cursor: "pointer" }} onClick={applyPromoCode}>
          Enter a promo code
        </Typography>
        <TextField
          label="Promo Code"
          variant="outlined"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          sx={{ marginY: 2 }}
        />
      </Box>

      {/* Right Section - Order Summary */}
      <Box className="order-summary">
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Divider />
        <Box className="subtotal">
          <Typography>Subtotal</Typography>
          <Typography>
            ₹{totalPrice.toFixed(2)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="checkout-button"

          onClick={handlePayment}
        >
          Pay Now
        </Button>
        <Typography variant="caption" className="checkout-secure">
          🔒 Secure Checkout
        </Typography>
      </Box>
    </Box>
  );
};

export default CartComponent;


