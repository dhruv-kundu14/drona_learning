import React from "react";
import { Box, Typography, IconButton, Button, TextField, Divider } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CartComponent = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 3, maxWidth: "1200px", margin: "auto" }}>
      {/* Left Section - Cart Details */}
      <Box sx={{ flex: 2, marginRight: 3 }}>
        <Typography variant="h6" gutterBottom>
          My Cart
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", alignItems: "center", marginY: 2 }}>
          <img
            src="https://via.placeholder.com/100" // Replace with actual image URL
            alt="Product"
            style={{ borderRadius: "8px", marginRight: "16px" }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1">Mathematics - X CBSE: Advanced Plan - ASLP</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
              ₹35,000.00
            </Typography>
            <Typography variant="h6" color="primary">
              ₹26,250.00
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="outlined" size="small">-</Button>
            <TextField value="1" size="small" sx={{ width: "50px", marginX: 1 }} />
            <Button variant="outlined" size="small">+</Button>
          </Box>
          <Typography variant="h6" sx={{ marginLeft: "16px" }}>
            ₹26,250.00
          </Typography>
          <IconButton color="error">
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
        <Divider />
        <Typography sx={{ marginY: 2, color: "blue", cursor: "pointer" }}>Enter a promo code</Typography>
        <Typography sx={{ color: "blue", cursor: "pointer" }}>Add a note</Typography>
      </Box>

      {/* Right Section - Order Summary */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between", marginY: 2 }}>
          <Typography>Subtotal</Typography>
          <Typography>₹26,250.00</Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ paddingY: 1.5, marginY: 2 }}
        >
          Checkout
        </Button>
        <Typography variant="caption" display="block" align="center" color="text.secondary">
          🔒 Secure Checkout
        </Typography>
      </Box>
    </Box>
  );
};

export default CartComponent;
