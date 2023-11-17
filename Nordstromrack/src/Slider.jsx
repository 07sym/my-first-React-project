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

const SlideShow = () => {
  const images = [
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFz…jE3OTA3MjE4NTM1NS5qcGVn.jpg?w=400&h=400&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFz…jk5MDg0MzU3MzI5MC5qcGVn.jpg?w=400&h=400&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFz…jM5MTgzOTM4NTk4OS5qcGVn.jpg?w=400&h=400&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFz…jgxMTIwMjg1OTU5Mi5qcGVn.jpg?w=400&h=400&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFz…jQyODk4NzczMzIxLmpwZWc=.jpg?w=400&h=400&fit=cover",
    "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFz…jMxNjc5MzIxNDQ3MC5qcGVn.jpg?w=640&h=640&fit=cover",


  ];

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default SlideShow;
