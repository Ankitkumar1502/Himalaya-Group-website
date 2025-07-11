// src/pages/ContactPage.jsx
import React from 'react';
import styles from './ContactPage.module.css'; // Create a CSS module for this page

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          We're here to help! Reach out to us through any of the following channels.
        </p>

        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <h3 className={styles.itemTitle}>Email Us</h3>
            <p className={styles.itemContent}>
              <a href="mailto:info@himalayagroup.com">info@himalayagroup.com</a>
            </p>
          </div>

          <div className={styles.contactItem}>
            <h3 className={styles.itemTitle}>Call Us</h3>
            <p className={styles.itemContent}>
              <a href="tel:+919334767990">+91 9334767990</a>
            </p>
            <p className={styles.itemContent}>
              <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a> {/* Replace with your second number */}
            </p>
          </div>

          <div className={styles.contactItem}>
            <h3 className={styles.itemTitle}>Our Address</h3>
            <p className={styles.itemContent}>
              Himalaya Group of Institutions
              <br />
              [Your Full Address Line 1]
              <br />
              [Your Full Address Line 2], Patna, Bihar, India
            </p>
          </div>
        </div>

        {/* You can add a contact form here later if needed */}
        {/* <div className={styles.contactForm}>
          <h3>Send us a Message</h3>
          // Your form elements
        </div> */}
      </div>
    </div>
  );
};

export default ContactPage;