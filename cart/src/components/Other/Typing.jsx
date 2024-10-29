import React, { useEffect, useState } from 'react';

const Typing = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState(''); // Text that is currently being displayed
  const [index, setIndex] = useState(0); // Current index of character

  useEffect(() => {
    // Set timeout to simulate typing effect
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout); // Cleanup timeout on unmount or when index updates
    }
  }, [index, text, speed]);

  return (
    <div className="typing-animation">
      <span>{displayedText}</span>
      <span className="blinking-cursor font-light text-4xl">|</span> {/* Optional blinking cursor */}
    </div>
  );
};

export default Typing;
