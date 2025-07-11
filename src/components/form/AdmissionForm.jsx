import React, { useState } from 'react';
import styles from './admissionForm.module.css'; // Using CSS Modules

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    contactNumber: '',
    qualification: '',
    courseName: '',
    collegeName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you would typically send data to an API
    alert('Form submitted successfully! (Check console for data)');
    // Reset form or redirect
    setFormData({
      fullName: '',
      fatherName: '',
      contactNumber: '',
      qualification: '',
      courseName: '',
      collegeName: '',
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Admission Form</h2>
      <p className={styles.formSubtitle}>Fill out the details below to apply for admission.</p>

      <form onSubmit={handleSubmit} className={styles.admissionForm}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="fatherName">Father's Name</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter your father's name"
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel" // Use type="tel" for phone numbers
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="e.g., +91 9876543210"
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="e.g., 12th Pass, Graduate"
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="courseName">Course Name</label>
          {/* You might want a select dropdown here populated by your courses later */}
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            placeholder="e.g., MBBS, GNM, B.Tech"
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="collegeName">College Name</label>
          <select
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
            className={styles.formSelect}
          >
            <option value="">-- Select College --</option>
            {/* Populate with actual college names from your institutions */}
            <option value="Himalaya Medical College & Hospital">Himalaya Medical College & Hospital</option>
            <option value="Himalaya Ayurvedic Medical College & Hospital">Himalaya Ayurvedic Medical College & Hospital</option>
            <option value="Himalaya Institutions of Higher Education">Himalaya Institutions of Higher Education</option>
            <option value="Himalaya Teacher's Training College">Himalaya Teacher's Training College</option>
            <option value="Himalaya College of Pharmacy">Himalaya College of Pharmacy</option>
            <option value="Himalaya College of Nursing">Himalaya College of Nursing</option>
            <option value="Himalaya College of Professional Education">Himalaya College of Professional Education</option>
            <option value="Fatuha (pvt.) Industrial Training Institute">Fatuha (pvt.) Industrial Training Institute</option>
            <option value="G.S Teachers Training College">G.S Teachers Training College</option>
            <option value="Himalaya Institute of Technology">Himalaya Institute of Technology</option>
            <option value="Himalaya College of Paramedics">Himalaya College of Paramedics</option>
            <option value="Himalaya Law College">Himalaya Law College</option>
            <option value="Patna Institute of Nursing & Para Medical Science">Patna Institute of Nursing & Para Medical Science</option>
            <option value="Patna (pvt.) Industrial Training Institute">Patna (pvt.) Industrial Training Institute</option>
            <option value="Patliputra College of Nursing">Patliputra College of Nursing</option>
            <option value="Patliputra College of Professional Education">Patliputra College of Professional Education</option>
            <option value="Dhanarua School of Nursing & Paramedics">Dhanarua School of Nursing & Paramedics</option>
            <option value="Dhanarua (pvt.) Industrial Training Institute">Dhanarua (pvt.) Industrial Training Institute</option>
            <option value="Dhanarua School of Nursing & Paramedics (Pharmacy College)">Dhanarua School of Nursing & Paramedics (Pharmacy College)</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;