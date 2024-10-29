// src/components/Cart.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart  } = useContext(CartContext); // Get cart items from context
  const navigate = useNavigate(); // Hook for navigation

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const handleBuyClick = () => {
    // Navigate to login page when Buy button is clicked
    navigate('/Order');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {/* <div className="border-b mb-4 pb-2 text-blue-600 cursor-pointer">
        <a href="#">Deselect all items</a>
      </div> */}

      {/* Cart items */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-start border-b pb-4 mb-4">
            <div className="flex items-start mx-auto">
              {/* Product Image */}
              <img src={item.img} alt={item.name} className="w-24 h-24 object-cover mr-4" />

              {/* Product Info */}
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p>{item.description}</p>
                <p className="text-sm text-green-600">In stock</p>
                <p className="text-sm">Eligible for FREE Shipping</p>

                {/* Quantity, Delete, and Save for later */}
                <div className="mt-2">
                  <select className="border p-1 rounded">
                    {[1, 2, 3, 4].map((qty) => (
                      <option key={qty} value={qty}>
                        Qty: {qty}
                      </option>
                    ))}
                  </select>
                  <button className="ml-4 text-blue-600"  onClick={() => removeFromCart(item)} >Delete</button>
                </div>
              </div>
            </div>

            {/* Product Price */}
            <div className="text-right mx-auto">
              <p className="font-bold text-lg">₹{item.price.toLocaleString()}</p>
            </div>
          </div>
        ))
      )}

      {/* Subtotal */}
      <div className="mx-auto">
      <div className="text-right mt-4 ml-96">
        <p className="text-lg font-bold">Subtotal ({cartItems.length} items): ₹{getTotalPrice().toLocaleString()}</p>
      </div>

      {/* Buy Button */}
      <div className="mt-[-30px] text-right mr-96">
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleBuyClick} // Handle Buy button click
          >
          Buy
        </button>
      </div>
      </div>
    </div>
  );
};

export default Cart;
