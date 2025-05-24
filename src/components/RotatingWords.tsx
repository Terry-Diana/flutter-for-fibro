
import React, { useState, useEffect } from "react";

const affirmations = ["Strength", "Hope", "Community"];

const RotatingWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % affirmations.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-8 flex items-center justify-center">
      <span
        className={`text-2xl md:text-3xl font-bold text-white transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-live="polite"
        aria-label={`Current affirmation: ${affirmations[currentIndex]}`}
      >
        {affirmations[currentIndex]}
      </span>
    </div>
  );
};

export default RotatingWords;
