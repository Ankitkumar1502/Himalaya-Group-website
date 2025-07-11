// src/components/ourColleges/OurCollegesSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import styles from './ourCollegesSection.module.css';
import { FaGraduationCap, FaHospital, FaFlask, FaStethoscope, FaBook, FaLaptopCode, FaBalanceScale, FaUserNurse } from 'react-icons/fa'; // Example icons

// Data for your college cards (at least 9, with more if available from previous lists)
const collegesData = [
  {
    id: 1,
    name: "Himalaya Medical College & Hospital",
    icon: <FaHospital />,
    description: "Leading medical education and healthcare services.",
  },
  {
    id: 2,
    name: "Himalaya Ayurvedic Medical College & Hospital",
    icon: <FaFlask />,
    description: "Pioneering traditional Ayurvedic medicine.",
  },
  {
    id: 3,
    name: "Himalaya Institutions of Higher Education",
    icon: <FaGraduationCap />,
    description: "Diverse programs for academic excellence.",
  },
  {
    id: 4,
    name: "Himalaya College of Pharmacy",
    icon: <FaFlask />,
    description: "Shaping future pharmacists and researchers.",
  },
  {
    id: 5,
    name: "Himalaya College of Nursing",
    icon: <FaUserNurse />,
    description: "Empowering compassionate nursing professionals.",
  },
  {
    id: 6,
    name: "Himalaya College of Paramedics",
    icon: <FaStethoscope />,
    description: "Training essential healthcare support staff.",
  },
  {
    id: 7,
    name: "Himalaya College of Professional Education",
    icon: <FaBook />,
    description: "Skill-focused courses for career advancement.",
  },
  {
    id: 8,
    name: "Himalaya Law College",
    icon: <FaBalanceScale />,
    description: "Cultivating legal minds for justice.",
  },
  {
    id: 9,
    name: "Himalaya Institute of Technology",
    icon: <FaLaptopCode />,
    description: "Innovating in engineering and technology.",
  },
  {
    id: 10,
    name: "Patna Institute of Nursing & Para Medical Science",
    icon: <FaUserNurse />,
    description: "Comprehensive training for healthcare careers.",
  },
  {
    id: 11,
    name: "Patliputra College of Nursing",
    icon: <FaUserNurse />,
    description: "Excellence in nursing education and practice.",
  },
  {
    id: 12,
    name: "Dhanarua School of Nursing & Paramedics",
    icon: <FaStethoscope />,
    description: "Dedicated to practical healthcare training.",
  },
  // Add more colleges if you have them from your previous list
  // { id: 13, name: "Fatuha (pvt.) Industrial Training Institute", icon: <FaTools />, description: "Vocational training for industrial skills." },
  // { id: 14, name: "G.S Teachers Training College", icon: <FaChalkboardTeacher />, description: "Preparing educators for tomorrow's classrooms." },
];

const OurCollegesSection = () => {
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
    <section ref={sectionRef} className={`${styles.ourCollegesSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Esteemed Colleges</h2>
        <p className={styles.sectionSubtitle}>Discover the institutions that shape future leaders and professionals.</p>

        <div className={styles.cardsGrid}>
          {collegesData.map((college, index) => (
            <div
              key={college.id}
              className={styles.collegeCard}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }} // Staggered animation
            >
              <div className={styles.cardIconWrapper}>
                {college.icon}
              </div>
              <h3 className={styles.cardTitle}>{college.name}</h3>
              <p className={styles.cardDescription}>{college.description}</p>
              <a href="#" className={styles.learnMoreButton}>Learn More</a> {/* Add actual links later */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCollegesSection;