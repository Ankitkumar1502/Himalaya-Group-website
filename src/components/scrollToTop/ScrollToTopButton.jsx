import React, { useState, useEffect, useCallback } from 'react';
import styles from './scrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the page to the top smoothly
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  }, []);

  // Event listener to check scroll position and show/hide button
  const handleScroll = useCallback(() => {
    // Show button if page is scrolled down more than 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // Dependency on handleScroll to ensure it's up-to-date

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.show : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      &#9650; {/* Up arrow Unicode character */}
    </button>
  );
};

export default ScrollToTopButton;