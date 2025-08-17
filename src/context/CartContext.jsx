// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (game) => {
    toast.success(`${game.name} added to cart!`);
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(item => item.id === game.id);
      if (isItemInCart) {
        return prevItems.map(item =>
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...game, quantity: 1 }];
    });
  };

  // NEW FUNCTION: Increase quantity
  const increaseQuantity = (gameId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === gameId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // NEW FUNCTION: Decrease quantity (and remove if quantity is 1)
  const decreaseQuantity = (gameId) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === gameId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };
  
  const removeFromCart = (gameId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== gameId));
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity, // <-- Export new functions
    decreaseQuantity, // <-- Export new functions
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};