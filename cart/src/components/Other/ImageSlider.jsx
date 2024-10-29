import React, { useState, useEffect } from "react";

const ImageSlider = ({ images, interval = 1000, heightClass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides at the specified interval
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    // Clear the interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentIndex, images.length, interval]);

  return (
    <div className="relative max-w-full h-96">
      {/* Image */}
      <div
        className="w-full h-[450px] bg-center bg-cover duration-700"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer"
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
          )
        }
      >
        ❮
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer"
        onClick={() =>
          setCurrentIndex(
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
          )
        }
      >
        ❯
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-white"
            } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

