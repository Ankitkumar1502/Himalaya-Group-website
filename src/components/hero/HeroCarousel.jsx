import React, { useEffect, useState, useCallback } from 'react';
import './heroCarousel.css';
import slide2 from '../../assets/images/slide2.jpeg';
import slide3 from '../../assets/images/slide3.jpeg';
import slide4 from '../../assets/images/slide4.jpeg';
import SidePanel from '../side/SidePanel';

const imageUrl1 = 'https://himalayagroupofinstitutions.com/new/WhatsApp%20Image%202025-06-10%20at%2011.46.26%20AM.jpeg';

const images = [imageUrl1, slide2, slide3, slide4];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent(prev => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    // Clear any existing timer to prevent multiple intervals running
    let timer;

    // Determine the delay based on the current slide
    const delay = current === 0 ? 6000 : 3000; // 6 seconds for imageUrl1 (index 0), 3 seconds for others

    timer = setInterval(() => {
      nextSlide();
    }, delay);

    // Cleanup function to clear the interval when the component unmounts
    // or when 'current' or 'nextSlide' dependencies change (to reset the timer with new delay)
    return () => clearInterval(timer);
  }, [current, nextSlide]); // Dependencies: current (to change delay), nextSlide (function stability)

  return (
    <div className="hero-carousel">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === current ? 'active' : ''}`}
        />
      ))}

      {/* Conditional rendering for the overlay text */}
      {current !== 0 && (
        <div className="carousel-overlay">
          <h1>Welcome to Himalaya Groups</h1>
          <p>Your journey to excellence begins here.</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094; {/* Left arrow Unicode character */}
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095; {/* Right arrow Unicode character */}
      </button>

      <SidePanel/>
    </div>
  );
};

export default HeroCarousel;