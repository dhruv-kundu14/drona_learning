import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, CircularProgress } from "@mui/material";
import axios from "axios";
import "./BuyingHistory.css";

const BuyingHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBuyingHistory = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Replace with actual user ID retrieval logic

        if (!userId) {
          setError("User ID is missing. Please log in.");
          setLoading(false);
          return;
        }

        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        if (!backendUrl) {
          setError("Backend URL is not configured properly.");
          setLoading(false);
          return;
        }

        const response = await axios.get(`${backendUrl}/common-backend/api/purchase-history`, {
          params: { userId },
        });

        console.log("Response Data:", response.data); // Log response to inspect the structure

        // Access the items array inside the first element of the response data
        if (response.data.length > 0 && response.data[0].items) {
          setHistory(response.data[0].items); // Set items from the first element
        } else {
          setError("No purchase history found.");
        }
      } catch (err) {
        setError("Failed to load buying history. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBuyingHistory();
  }, []);

  return (
    <Box className="buying-history-container">
      <Typography variant="h6" gutterBottom>
        Buying History
      </Typography>
      <Divider />
      {loading ? (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100vh">
          <CircularProgress />
          <Typography variant="body2" marginLeft={2}>
            Fetching your buying history...
          </Typography>
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : history.length > 0 ? (
        history.map((item) => (
          <Box key={item.id} className="history-item" display="flex" alignItems="center" marginBottom={2}>
            <img
              src={item.image}
              alt={item.name}
              className="history-item-image"
              style={{ width: 100, height: 100, objectFit: "cover", marginRight: 16 }}
            />
            <Box className="history-item-details">
              <Typography variant="subtitle1" className="history-item-name">
                {item.name}
              </Typography>
              <Typography variant="body2" className="history-item-date">
                Purchased On: {new Date(item.purchaseDate).toLocaleDateString()} {/* Format the date correctly */}
              </Typography>
              <Typography variant="body2" className="history-item-price">
                Price: ₹{item.price ? item.price.toLocaleString() : "N/A"} {/* Ensure price is correctly formatted */}
              </Typography>
              <Typography variant="body2" className="history-item-quantity">
                Quantity: {item.quantity}
              </Typography>
            </Box>
          </Box>
        ))
      ) : (
        <Typography>No buying history available.</Typography>
      )}
    </Box>
  );
};

export default BuyingHistory;
