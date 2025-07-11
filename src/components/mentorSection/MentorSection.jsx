// src/components/mentorSection/MentorSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import styles from './mentorSection.module.css';

// Import mentor images
import umaShankarImage from '../../assets/images/t1.png'; //
import ramchandraSawImage from '../../assets/images/t2.png'; //

const MentorSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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

  // Data for the two mentors
  // Added a 'truncatedLength' property for character limit
  // For 'bio', keep it as a string for easier manipulation
  const mentors = [
    {
      id: 1,
      name: "Uma Shankar",
      role: "Chairman, Himalaya Group of Institutions",
      image: umaShankarImage,
      bio: `Medical, Pharmacy, ITI, Paramedical, Nursing,Law , Professional and Educational Courses —under the Himalaya Group of Institutions:
It is with great pride and heartfelt joy that I welcome you to the Himalaya Group of Institutions—a vibrant hub of learning, innovation, and excellence.
Whether you’ve joined us in Medical, Pharmacy, ITI, Paramedical, Nursing,Law or Professional and Educational Colleges, you are now part of a diverse and dynamic community that is united by a shared commitment to knowledge, service, and personal growth.
At Himalaya, we believe education is more than just books and lectures— it is a journey of transformation. Hence, you will not only gain technical expertise and academic excellence, but also the values, confidence, and character needed to lead with purpose in today’s world.
Our dedicated faculty, state-of-the-art infrastructure, and student-centered approach are all here to support you as you embark on this meaningful chapter of your life. You are the future of your respective fields; and we are honored to play a role in shaping that future.
Once again, welcome to the Himalaya family. Let’s grow together, achieve together, and create a better tomorrow —together.
Warm regards,`,
      truncatedLength: 200 // Characters before truncation
    },
    {
      id: 2,
      name: "Dr.Ramchandra Saw",
      role: "Director, Himalaya Group of Institutions",
      image: ramchandraSawImage,
      phone: "+91-93044637349",
      bio: `Medical, Pharmacy, ITI, Paramedical, Nursing,Law , Professional and Educational Courses —under the Himalaya Group of Institutions:
It is my immense pleasure to welcome each one of you to the Himalaya Group of Institutions, where dreams take shape, futures are forged, and possibilities are endless.
Whether you are beginning your journey in Medical, Pharmacy, ITI, Paramedical, Nursing,Law , Professional or Educational Courses, you are now part of a vibrant academic family that is dedicated to excellence, innovation, and holistic development.
At Himalaya, we are committed to nurturing not just brilliant minds, but also compassionate hearts and responsible citizens. Our mission is to empower you with the knowledge, skills, and values that will enable you to excel in your chosen field and make a meaningful difference in the world.
As a multidisciplinary institution, we take pride in fostering a culture of collaboration, curiosity, and care. Our experienced faculty, modern infrastructure, and student-centric learning environment are here to support your academic and personal journey every step of the way.
Welcome to the Himalaya family. Together, let’s rise, learn, lead—and leave a legacy of impact.
Warm regards,`,
      truncatedLength: 200 // Characters before truncation
    }
  ];

  // Component to render individual mentor bio with Read More/Show Less
  const MentorBio = ({ fullBio, truncatedLength }) => {
    // State to manage if the bio is expanded
    const [isExpanded, setIsExpanded] = useState(false);

    // Determine if truncation is needed
    const needsTruncation = fullBio.length > truncatedLength;

    // Get the bio text to display
    const displayedBio = needsTruncation && !isExpanded
      ? fullBio.substring(0, truncatedLength) + '...'
      : fullBio;

    // Handle toggle for Read More/Show Less
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };

    // Replace newline characters with <br> tags for proper rendering of paragraphs
    const formatBio = (text) => {
      return text.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ));
    };


    return (
      <div className={styles.mentorBioContent}>
        {formatBio(displayedBio)}
        {needsTruncation && (
          <button onClick={toggleExpansion} className={styles.readMoreButton}>
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className={`${styles.mentorSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Esteemed Mentors</h2>
        <div className={styles.mentorCardsWrapper}>
          {mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className={`${styles.mentorCard} ${index % 2 === 0 ? styles.evenCard : styles.oddCard}`}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className={styles.mentorImageContainer} style={{ backgroundImage: `url(${mentor.image})` }}>
                {/* Keep img tag for alt text accessibility if you use background-image in CSS */}
                <img src={mentor.image} alt={mentor.name} className={styles.mentorImage} />
                <div className={styles.imageOverlay}>
                  <p className={styles.imageName}>{mentor.name}</p>
                  <p className={styles.imageRole}>{mentor.role}</p>
                  {mentor.phone && <p className={styles.imagePhone}>{mentor.phone}</p>}
                </div>
              </div>
              <div className={styles.mentorBio}>
                <h3>{mentor.name}</h3>
                <p className={styles.mentorRoleText}>{mentor.role}</p>
                {/* Use the new MentorBio component here */}
                <MentorBio fullBio={mentor.bio} truncatedLength={mentor.truncatedLength} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;