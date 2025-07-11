// src/components/aboutUs/AboutUsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './aboutUsSection.module.css'; // Import CSS Module
import { FaCheckCircle } from 'react-icons/fa'; // For checkmark icons

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('about'); // 'about', 'mission', 'vision'
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

  const tabContent = {
    about: (
      <p>
        Over the year, the Himalaya Group of Institutions has experienced explosive expansion.
        We have been successful in adding a variety of Colleges Like - I.T.I Colleges, Nursing
        Colleges, Medical College Ayurvedic College, Paramedical Colleges, Professional
        Colleges, Law College, Pharmacy Colleges to our Higher Education colleges gradually
        but steadily, providing aspirant students with a platform to become trained professionals.
      </p>
    ),
    mission: (
      <p>
        Our mission is to foster a dynamic learning environment that inspires innovation,
        critical thinking, and holistic development. We are dedicated to nurturing future
        leaders who are not only academically proficient but also socially responsible
        and ethically sound.Higher Education colleges gradually
        but steadily, providing aspirant students with a platform to become trained professionals.
      </p>
    ),
    vision: (
      <p>
        Our vision is to be a globally recognized institution of excellence, continually
        setting benchmarks in education, research, and community service. We aim to empower
        individuals to achieve their full potential and contribute positively to society.
        Higher Education colleges gradually
        but steadily, providing aspirant students with a platform to become trained professionals.
      </p>
    ),
  };

  return (
    <section ref={sectionRef} className={`${styles.aboutUsSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <p className={styles.subheading}>ABOUT US</p>
          <h2 className={styles.heading}>We Provide Best Education Services For You</h2>

          <div className={styles.tabs}>
            <button
              className={`${styles.tabButton} ${activeTab === 'about' ? styles.active : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About College
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'mission' ? styles.active : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'vision' ? styles.active : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
          </div>

          <div className={styles.tabContent}>
            {tabContent[activeTab]}
          </div>

          <ul className={styles.checklist}>
            <li className={styles.checklistItem}>
              <FaCheckCircle className={styles.checkIcon} /> Education Award Achieved
            </li>
            <li className={styles.checklistItem}>
              <FaCheckCircle className={styles.checkIcon} /> Available Multiple Colleges
            </li>
            <li className={styles.checklistItem}>
              <FaCheckCircle className={styles.checkIcon} /> Provide Multiple Courses
            </li>
          </ul>
        </div>

        <div className={styles.contentRight}>
          {/* Placeholder images - replace with actual image paths */}
          <div className={styles.imageWrapper}>
            <img
              src="https://media.istockphoto.com/id/1056359860/photo/workplace-recognition-makes-all-the-difference.jpg?s=612x612&w=0&k=20&c=VPuq_cfggJyzCFdKkwPEI3wp-n0UDTNMB94xr8LFfts="
              alt="Award Ceremony"
              className={styles.mainImage}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZt9Lp5uKNy-ab7RwG9rVbyXUqwg0NCGmFA&s"
              alt="Campus Life"
              className={styles.secondaryImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;