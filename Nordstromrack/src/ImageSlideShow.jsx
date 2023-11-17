import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);

   
    return () => clearInterval(intervalId);
  }, [currentIndex]); 

  return (
    <div className="slider-container">
      <button className="prev" onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className="next" onClick={goToNextSlide}>
        &gt;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

const ImageSlideShow = () => {
  const images = [
    "https://n.nordstrommedia.com/it/bc702135-4348-43e1-a84a-f227c6c979a5.jpeg?h=720&w=1608",
    "https://n.nordstrommedia.com/it/2ba0a440-b6b3-4926-83ea-e322574ed97b.jpeg?h=720&w=1608",
    "https://n.nordstrommedia.com/it/30fac3cd-d916-4971-90d3-494a32243f13.png?h=720&w=1608"
    
  ];

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default ImageSlideShow;
