import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add items to cart
  const handleAddToCart = (item, amount) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      // Update the amount if the item already exists in the cart
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, amount: cartItem.amount + amount }
            : cartItem
        )
      );
    } else {
      // Add new item to cart
      setCart([...cart, { ...item, amount }]);
    }
  };

  // Function to remove items from the cart
  const handleRemoveFromCart = (itemName) => {
    setCart(cart.filter((cartItem) => cartItem.name !== itemName));
  };

  return (
    <>
      <Navbar cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      <Product handleAddToCart={handleAddToCart} />
    </>
  );
};

export default App;
