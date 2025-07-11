import React, { useRef, useEffect, useState } from 'react';
import styles from './statsSection.module.css';
import useCountingAnimation from '../../hooks/useCountingAnimation'; 
const StatCard = ({ target, label, prefix = '', suffix = '', delay }) => {
  const cardRef = useRef(null);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Use the custom hook for counting animation, tied to cardVisible state
  const animatedCount = useCountingAnimation(target, 2000, cardVisible);

  const displayValue = label === "EXPERIENCED FACULTY" ? `${prefix}${animatedCount}${suffix}` : `${animatedCount}${suffix}`;
  if (label === "EXPERIENCED FACULTY" && cardVisible) {
      // For 1,000+, we need to handle the '+'
      // Since our animation counts up to 1000, we add the '+' only if it's the target and visible
      return (
        <div ref={cardRef} className={`${styles.statCard} ${cardVisible ? styles.visible : ''}`} style={{ animationDelay: delay }}>
            <p className={styles.statNumber}>{animatedCount < target ? `${animatedCount}${suffix}` : `${target}${suffix}`}</p> {/* */}
            <p className={styles.statLabel}>{label}</p> {/* */}
        </div>
      );
  }


  return (
    <div ref={cardRef} className={`${styles.statCard} ${cardVisible ? styles.visible : ''}`} style={{ animationDelay: delay }}>
      <p className={styles.statNumber}>{displayValue}</p> {/* */}
      <p className={styles.statLabel}>{label}</p> {/* */}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {/* Data from image_5e52be.png */}
        <StatCard target={100} suffix="%" label="BEST EDUCATION" delay="0.1s" />
        <StatCard target={90} suffix="%" label="TOP PLACEMENTS" delay="0.2s" />
        <StatCard target={100} suffix="%" label="SATISFACTION RATE" delay="0.3s" />
        <StatCard target={1000} suffix="+" label="EXPERIENCED FACULTY" delay="0.4s" />
      </div>
    </section>
  );
};

export default StatsSection;