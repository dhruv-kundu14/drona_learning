import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const RazorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, totalPrice } = location.state || { cart: [], totalPrice: 0 };

  const handlePayment = async () => {
    try {
      // Check if Razorpay SDK is loaded
      if (!window.Razorpay) {
        alert("Razorpay SDK failed to load. Please refresh the page.");
        return;
      }

      // Create order in backend
      const response = await axios.post("http://localhost:5000/create-order", {
        amount: totalPrice, 
      });

      const { id, currency, amount: orderAmount } = response.data;

      // Razorpay options
      const options = {
        key: process.env.RAZORPAY_KEY_ID, // Environment variable
        amount: orderAmount,
        currency,
        name: "My App",
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

  return (
    <div>
      <h1>Razorpay Payment</h1>
      <p>Total Amount: ₹{totalPrice.toFixed(2)}</p>
      <button onClick={handlePayment}>Pay Now</button>
      <button onClick={() => navigate("/success", { state: { cart, totalPrice } })}>
        Test Success
      </button>
    </div>
  );
};

export default RazorPage;
