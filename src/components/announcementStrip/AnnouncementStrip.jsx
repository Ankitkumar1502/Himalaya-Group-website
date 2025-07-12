// src/components/announcementStrip/AnnouncementStrip.jsx
import React, { useState } from 'react';
import styles from './announcementStrip.module.css';

const messages = [
  "📢 Admission Open for 2025-2026! Apply Now!",
  "📝 Click on Apply Now for Admission Form.",
  "🔔 Latest Notices: Check the Notices section for updates.",
  "💳 Fees Submission Deadline Approaching - Submit Online!",
  "✨ Your journey to excellence starts here!"
];

const AnnouncementStrip = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`${styles.announcementStrip} ${isPaused ? styles.paused : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.marqueeContent}>
        {/* Duplicate messages to create a seamless loop effect */}
        {messages.map((msg, index) => (
          <span key={`msg-1-${index}`} className={styles.messageItem}>{msg}</span>
        ))}
        {messages.map((msg, index) => (
          <span key={`msg-2-${index}`} className={styles.messageItem}>{msg}</span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementStrip;