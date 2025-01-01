// import React, { createContext, useState, useContext } from 'react';

// // Create the CartContext
// const CartContext = createContext();

// // Custom hook to use cart context
// export const useCart = () => useContext(CartContext);

// // CartProvider component to wrap the app and provide cart data
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]); // Start with an empty cart

//   // Function to add item to cart
//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   // Function to remove item from cart
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((prev) => [...prev, item]);
  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
