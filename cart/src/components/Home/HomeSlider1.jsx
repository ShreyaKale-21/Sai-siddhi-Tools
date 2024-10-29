// import React, { useState, useEffect } from 'react';

// const HomeSlider1 = ({ images, heightClass, widthClass }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalImages = images.length;

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Change the time as needed
//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [currentIndex]);

//   // Function to move to the next slide
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
//   };

//   // Function to move to the previous slide
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalImages - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full overflow-hidden ${heightClass} ${widthClass} ">
//       {/* Slider Track */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="w-1/3 flex-shrink-0"
//             style={{ flexBasis: '33.333%' }}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-64 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
//         onClick={prevSlide}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
//         onClick={nextSlide}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default HomeSlider1;


import React, { useEffect } from 'react';

const HomeSlider1 = ({ images, heightClass, widthClass, direction}) => {
  const totalImages = images.length;
  const sliderImages = [...images, ...images];

  // Create a ref to hold the slider track
  const sliderRef = React.useRef(null);
  const scrollPositionRef = React.useRef(0); 

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        // Move the slider left by one image width
        const sliderWidth = sliderRef.current.scrollWidth / 2; 
        const visibleWidth = sliderRef.current.clientWidth / 3; // Adjust based on number of visible images
        
        // Update scroll position
        if (direction === 'right') {
          scrollPositionRef.current += visibleWidth;
        } else {
          scrollPositionRef.current -= visibleWidth;
        }

        if (scrollPositionRef.current >= sliderWidth) {
          scrollPositionRef.current = 0;
          sliderRef.current.scrollLeft = 0;
        } else if (scrollPositionRef.current < 0) {
          // If we go backward past the first image, reset to the end of the slider
          scrollPositionRef.current = sliderWidth - visibleWidth;
          sliderRef.current.scrollLeft = scrollPositionRef.current;
        } else{
        const scrollOptions = {
          left: direction === 'right' ? visibleWidth : -visibleWidth, // Scroll left or right
          behavior: 'smooth',
        };
        sliderRef.current.scrollBy(scrollOptions);
      }
      }
    }, 3000); // Change the time as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [direction]);

  return (
    <div className={`relative overflow-hidden ${heightClass} ${widthClass}`}>
      {/* Slider Track */}
      <div
        ref={sliderRef}
        className="flex overflow-hidden"
        style={{
          width: '100%',
          display: 'flex',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-1/3 flex-shrink-0"
            style={{ flexBasis: '33.333%' }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider1;

