import React, { useState, useEffect } from 'react';
import images from './CasImage';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const autoChangeSlide = () => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    autoChangeSlide();
  }, []);

  return (
    <div className="carousel">
   
       
        <img src={images[currentIndex].img} alt="Carousel Slide" className="hero-image" />
        <div className="absolute inset-0  justify-center items-center text-center text-white">
        <div className="hero-content">
          <p className="hero-title text-center text-10xl text-white">
          {images[currentIndex].text}
        </p>
        <p className='bg-red-950 p-4 rounded-full'>SCHOOL PORTAL</p>
        </div>
      </div>
   
      <div className="pagination -mt-10 absolute left-1/2 transform -translate-x-1/2">
  {images.map((_, index) => (
    <span
      key={index}
      className={`dot w-2 h-2 bg-white rounded-full inline-block mx-1 ${
        index === currentIndex ? 'bg-gray-500' : ''
      }`}
    ></span>
  ))}
</div>

    </div>
  );
};

export default Carousel;

