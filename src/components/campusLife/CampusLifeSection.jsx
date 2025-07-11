// src/components/campusLife/CampusLifeSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import styles from './campusLifeSection.module.css';
import { FaChalkboardTeacher, FaMicroscope, FaBookReader } from 'react-icons/fa'; // Icons for campus aspects
import campusVideo from '../../assets/video/video.mp4'


const CampusLifeSection = () => {
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
    <section ref={sectionRef} className={`${styles.campusLifeSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <p className={styles.subheading}>CAMPUS</p>
        <h2 className={styles.mainTitle}>Our Campus Life</h2>
        <div className={styles.underline}></div>

        <div className={styles.contentWrapper}>
          {/* Left Content Column */}
          <div className={styles.textColumnLeft}>
            <div className={`${styles.featureItem} ${styles.leftItem1}`} style={{ animationDelay: '0.4s' }}>
              <div className={styles.iconBox}>
                <FaChalkboardTeacher />
              </div>
              <div className={styles.textDetails}>
                <h3>Classrooms and Lecture Halls</h3>
                <p>Equipped with modern technology, including projectors, smart boards, and high-speed internet.</p>
              </div>
            </div>
          </div>

          {/* Center Video */}
          <div className={`${styles.videoContainer} ${styles.centerVideo}`} style={{ animationDelay: '0.2s' }}>
             <video
              src={campusVideo} // <== Use the imported video variable here
              controls           // <== Adds video controls (play/pause, volume, etc.)
              loop               // <== Loops the video automatically
              muted              // <== Mutes the video by default (good for autoplay)
              autoPlay           // <== Autoplays the video when it loads (often requires muted)
              playsInline        // <== Recommended for iOS to play video inline
            >
              Your browser does not support the video tag.
            </video>
            <p className={styles.videoCaption}>बिहार स्टूडेंट क्रेडिट कार्ड से एडमिशन पाएं</p>
          </div>

          {/* Right Content Column */}
          <div className={styles.textColumnRight}>
            <div className={`${styles.featureItem} ${styles.rightItem1}`} style={{ animationDelay: '0.6s' }}>
              <div className={styles.iconBox}>
                <FaMicroscope />
              </div>
              <div className={styles.textDetails}>
                <h3>Laboratories</h3>
                <p>Specialized labs for sciences, engineering, computer science, and other disciplines; equipped with cutting-edge technology and equipment.</p>
              </div>
            </div>

            <div className={`${styles.featureItem} ${styles.rightItem2}`} style={{ animationDelay: '0.8s' }}>
              <div className={styles.iconBox}>
                <FaBookReader />
              </div>
              <div className={styles.textDetails}>
                <h3>Libraries</h3>
                <p>Extensive collections of books, journals, and digital resources; quiet study areas, group study rooms, and computer labs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;