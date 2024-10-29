// import React, { useEffect, useState } from 'react';
// import './flip.css'; // Import the custom CSS for the flip animation

// const Flip = ({ text, delay = 100 }) => {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     setDisplayedText('');
//     const timeouts = [];

//     // Loop through each character and apply the flip effect
//     text.split('').forEach((char, index) => {
//        const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + char); // Add one character at a time
//       }, index * delay); // Set delay between each character flip
//       timeouts.push(timeout); 
//     });

//     // Cleanup timeout on unmount
//     return () =>  {
//         timeouts.forEach((timeout) => clearTimeout(timeout));
//       };
  
//   }, [text, delay]);

//   return (
//     <div className="flex">
//       {displayedText.split('').map((char, index) => (
//         <span key={index} className="flip-text text-4xl font-bold mx-1">
//           {char}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default Flip;

import React, { useEffect, useState } from 'react';
import './flip.css'; // Import the custom CSS for the flip animation

const FlipLogo = ({ text, delay = 100 }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Start the animation after a brief delay
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className={`flip-container ${shouldAnimate ? 'flip' : ''}`}>
      <span className="text">{text}</span>
    </div>
  );
};

export default FlipLogo;
