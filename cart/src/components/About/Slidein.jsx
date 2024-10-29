import React, { useEffect, useRef, useState } from "react";

// SlideInComponent that slides in from the top when it enters the viewport
const Slidein = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Element has entered the viewport
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 1 } // Trigger when 10% of the element is in view
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-100 opacity-0"
      }`}
    >
      <div class="animate-slideInTop mb-4 md:mb-0">
        <div class="container mx-auto text-center">
          <div class="flex flex-col md:flex-row justify-around">
            <div>
            <h4 class="text-blue-600 text-3xl font-bold">VISION</h4>
            <p class=" mt-2 max-w-md text-lg">
              "We provide outstanding products and unsurpassed service which
              together deliver premium value to our actions."
            </p>
            </div>
            <div>
              <h4 class="text-blue-600 text-3xl font-bold">MISSION</h4>
              <p class=" mt-2 max-w-md text-lg">
                "To reduce your cost per component with our advanced cutting
                tools."
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidein;
