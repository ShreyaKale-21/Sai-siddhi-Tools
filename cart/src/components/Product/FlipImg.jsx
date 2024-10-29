// src/FlipCard.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import m1 from '../images/ig-logo2.png'
import './card.css';
import { CartContext } from '../Orders/CartContext';

const FlipImg = ({ img, title, description }) => {
  const navigate = useNavigate(); // Hook for navigation

  // const handleAddToCart = () => {
  //   navigate('/addtocart'); // Redirect to Add to Cart page
  // };

  const { addToCart } = useContext(CartContext); // Get addToCart function from context

  const handleAddToCart = () => {
    const item = {
      name: title,
      description,
      img,
      price: 1000, // Set the price, you can modify this according to your needs
      qty: 1,
    };
    addToCart(item); // Add item to cart
    navigate('/cart'); // Redirect to cart page
  };

  return (
    <>
    <div className='h-40 w-40  '>
    <img src={img}/>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front of the card (image) */}
        <div className="flip-card-front">
          {/* <img
            src="https://via.placeholder.com/250"
            alt="Example"
            className="flip-img"
          /> */}
        </div>
        {/* Back of the card (text) */}
        <div className="flip-card-back">
          {/* <h2>{title}</h2><br></br> */}
          <p className=''>{description}</p>
          <button
              onClick={handleAddToCart}
              className='bg-blue-600  hover:bg-blue-900 text-white font-bold mt-3 py-1 px-2 rounded'
            >
              Add to Cart
              {/* <AddtoCart/> */}
            </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default FlipImg;



