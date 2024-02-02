import React, { useState } from 'react'
import './caraousal.css'

const Caraousal = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };
  return (
    <div className="carousel">
      <div
        className="carousel_slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
            
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Caraousal
