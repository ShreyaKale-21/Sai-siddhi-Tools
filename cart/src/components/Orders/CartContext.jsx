// src/context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Remove item from the cart
  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemToRemove.name)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart  }}>
      {children}
    </CartContext.Provider>
  );
};
