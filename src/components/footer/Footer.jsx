
import styles from './footer.module.css';

import logo from '../../assets/images/logo-footer.png'; // Assuming you have a logo image

const Footer = () => {

  const colleges = [
    "Himalaya Medical college & Hospital",
    "Himalaya Ayurvedic Medical College & Hospital",
    "Himalaya Institutions of Higher Education",
    "Himalaya Teacher's Training College",
    "Himalaya College of Pharmacy",
    "Himalaya College of Nursing",
    "Himalaya College of Professional Education",
    "Fatuha (pvt.) Industrial Training Institute",
    "G.S Teachers Training College",
    "Himalaya Institute of Technology",
  ];

  const links = [
    "Himalaya College of Paramedics",
    "Himalaya Law College",
    "Patna Institute of Nursing & Para Medical Science",
    "Patna (pvt.) Industrial Training Institute",
    "Patliputra College of Nursing",
    "Patliputra College of Professional Education",
    "Dhanarua School of Nursing & Paramedics",
    "Dhanarua (pvt.) Industrial Training Institute",
    "Dhanarua School of Nursing & Paramedics (Pharmacy College)",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Section 1: Himalaya Group Info */}
        <div className={styles.footerColumn}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Himalaya Group Logo" className={styles.logo} /> {/* */}
            <h3 className={styles.logoText}>Himalaya Group of Institutions</h3> {/* */}
          </div>
          <p className={styles.contactInfo}>
            Address: MIG-44 Near Salimar Sweets, Lohiya Nagar Kankarbagh, Patna , 800020
          </p>
          <p className={styles.contactInfo}>
            Call: +91-9304637349 (Director)
            <br />
            +91-9334767990 (Chairman)
            <br />
            06122355110- (Office)
            <br />
            +91-9031624635 (Office)
            <br />
            +91-9264469788 (Office)
          </p>
          <p className={styles.contactInfo}>
            Email: <a href="mailto:info@himalayagroupofinstitutions.com" className={styles.footerLink}>info@himalayagroupofinstitutions.com</a>
          </p>
          <div className={styles.loginButtons}>
            <a href="#" className={styles.loginButton}>Webmail Login</a> {/* */}
            <a href="#" className={styles.loginButton}>Student-Query Login</a> {/* */}
          </div>
        </div>

        {/* Section 2: Our Colleges */}
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Our Colleges</h3> {/* */}
          <ul className={styles.footerLinksList}>
            {colleges.map((college, index) => (
              <li key={index}><a href="#" className={styles.footerLink}>{college}</a></li>
            ))}
          </ul>
        </div>

        {/* Section 3: More Links (continuation of colleges from original image) */}
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Links</h3> {/* */}
          <ul className={styles.footerLinksList}>
            {links.map((link, index) => (
              <li key={index}><a href="#" className={styles.footerLink}>{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Section 4: Social Media (from second image, common footer element) */}
        {/* I'll add Social Media and About links as they are common footer elements
            from Screenshot 2025-07-12 024451.png, even though the content from the black footer didn't explicitly list them.
            This makes it a "cool trendy footer". */}
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Social Media</h3> {/* */}
          <ul className={styles.footerLinksList}>
            <li><a href="#" className={styles.footerLink}>Twitter / X</a></li>
            <li><a href="#" className={styles.footerLink}>Facebook</a></li>
            <li><a href="#" className={styles.footerLink}>Instagram</a></li>
            {/* You can add more social media links here */}
          </ul>
        </div>
      </div>

      {/* Bottom Bar for Copyright and Policies */}
      <div className={styles.footerBottomBar}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} Himalaya groups</p>
          <ul className={styles.bottomBarLinks}>
            <li><a href="#" className={styles.footerLink}>Legal Policies</a></li>
            <li><a href="#" className={styles.footerLink}>Sitemap</a></li>
            <li><a href="#" className={styles.footerLink}>Contact</a></li> {/* */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;