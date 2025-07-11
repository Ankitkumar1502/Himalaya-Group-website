// src/hooks/useCountingAnimation.js
import { useEffect, useState } from 'react';

const useCountingAnimation = (targetNumber, duration = 2000, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) {
      setCount(0); // Reset count if animation should not start
      return;
    }

    let start = null;
    const end = targetNumber;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure it reaches the exact target number
      }
    };

    requestAnimationFrame(step);

    // Cleanup function
    return () => {
      setCount(0); // Reset on unmount or when startAnimation becomes false
    };
  }, [targetNumber, duration, startAnimation]);

  return count;
};

export default useCountingAnimation;