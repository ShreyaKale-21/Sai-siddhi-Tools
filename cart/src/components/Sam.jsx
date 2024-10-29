import React from "react";
import m1 from '../images/m1.png'
import "./sam.css"; // Import the CSS file for styling

const Sam = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={m1}
            alt="Flip Image"
            className="flip-card-img"
          />
        </div>
        <div className="flip-card-back">
          <h2>This is the back text</h2>
          <p>Here you can display additional information.</p>
        </div>
      </div>
    </div>
  );
};

export default Sam;
