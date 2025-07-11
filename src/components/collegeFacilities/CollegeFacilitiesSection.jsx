// src/components/collegeFacilities/CollegeFacilitiesSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import styles from './collegeFacilitiesSection.module.css';
import {
  FaBookOpen, // For Academic Facilities
  FaHandsHelping, // For Student Support Services
  FaBed, // For Residential Facilities
  FaVial, // For Lab/Library Facilities
  FaChalkboardTeacher, // For Skilled Lecturers
  FaRocket // For Advance Training
} from 'react-icons/fa';

const CollegeFacilitiesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.facilitiesSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <p className={styles.subheading}>SERVICES</p>
        <h2 className={styles.mainTitle}>College Facilities & Services</h2>
        <div className={styles.underline}></div>

        <div className={styles.topFacilitiesGrid}>
          {/* Academic Facilities Card */}
          <div className={`${styles.facilityCard} ${styles.card1}`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.iconWrapper}>
              <FaBookOpen />
            </div>
            <h3 className={styles.cardTitle}>Academic Facilities</h3>
            <p className={styles.cardDescription}>
              Libraries: Equipped with extensive collections of books, journals, and digital resources. Many libraries offer quiet study areas, group study rooms, computer labs, and special collections.
            </p>
          </div>

          {/* Student Support Services Card */}
          <div className={`${styles.facilityCard} ${styles.card2}`} style={{ animationDelay: '0.4s' }}>
            <div className={styles.iconWrapper}>
              <FaHandsHelping />
            </div>
            <h3 className={styles.cardTitle}>Student Support Services</h3>
            <p className={styles.cardDescription}>
              100% Placements : Confidential support for personal, academic. Provide guidance on course selection, career planning, and academic progress.
            </p>
          </div>

          {/* Residential Facilities Card */}
          <div className={`${styles.facilityCard} ${styles.card3}`} style={{ animationDelay: '0.6s' }}>
            <div className={styles.iconWrapper}>
              <FaBed />
            </div>
            <h3 className={styles.cardTitle}>Residential Facilities</h3>
            <p className={styles.cardDescription}>
              Hostel: On-campus hostel options with various room configurations, common areas, laundry facilities, and resident advisors. Various meal plans, diverse food options.
            </p>
          </div>
        </div>

        <div className={styles.bottomFeaturesGrid}>
          {/* Lab/Library Facilities Feature */}
          <div className={`${styles.featureItem} ${styles.feature1}`} style={{ animationDelay: '0.8s' }}>
            <div className={styles.featureIcon}>
              <FaVial />
            </div>
            <p className={styles.featureText}>Lab/Library Facilities</p>
          </div>

          {/* Skilled Lecturers Feature */}
          <div className={`${styles.featureItem} ${styles.feature2}`} style={{ animationDelay: '1.0s' }}>
            <div className={styles.featureIcon}>
              <FaChalkboardTeacher />
            </div>
            <p className={styles.featureText}>Skilled Lecturers</p>
          </div>

          {/* Advance Training Feature */}
          <div className={`${styles.featureItem} ${styles.feature3}`} style={{ animationDelay: '1.2s' }}>
            <div className={styles.featureIcon}>
              <FaRocket />
            </div>
            <p className={styles.featureText}>Advance Training</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeFacilitiesSection;