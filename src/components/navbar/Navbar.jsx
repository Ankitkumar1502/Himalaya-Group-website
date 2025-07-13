import { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/images/logo-footer.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  // Use useEffect to manage body class for scroll lock
  useEffect(() => {
    if (isMenuOpen || isOffCanvasOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen, isOffCanvasOpen]); // Re-run effect when either state changes

  // Function to toggle main menu
  const toggleMainMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isOffCanvasOpen) {
      setIsOffCanvasOpen(false); // Close off-canvas if open when main menu toggles
    }
  };

  // Function to open the off-canvas menu
  const openOffCanvas = (e) => {
    e.preventDefault();
    setIsOffCanvasOpen(true);
    setIsMenuOpen(false); // Close main menu when off-canvas opens
  };

  // Function to close the off-canvas menu
  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  // Function to close all menus (main and off-canvas) when a link is clicked
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsOffCanvasOpen(false);
  };

  return (
    <nav className="sticky-navbar">
      <div className="nav-container">
        <div className="brand">
          <img src={navLogo} alt="Himalaya Logo" className="nav-brand-logo" />
          Himalaya Group of Institution
        </div>

        <div className="hamburger" onClick={toggleMainMenu}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
          <li><Link to="/" onClick={closeAllMenus}>Home</Link></li>
          <li><Link to="/about" onClick={closeAllMenus}>About us</Link></li>

          <li className="dropdown">
            <a href="#" onClick={openOffCanvas}>Our Colleges ▾</a>
            <ul className="dropdown-menu desktop-dropdown">
              {/* Desktop colleges list */}
              <li><a href="#" onClick={closeAllMenus}>Medical College</a></li>
              <li><a href="#" onClick={closeAllMenus}>Ayurvedic College</a></li>
              <li><a href="#" onClick={closeAllMenus}>Pharmacy</a></li>
              <li><a href="#" onClick={closeAllMenus}>Nursing</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya Medical College & Hospital</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya Ayurvedic Medical College & Hospital</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya Institutions of Higher Education</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya Teacher's Training College</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya College of Pharmacy</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya College of Nursing</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya College of Professional Education</a></li>
              <li><a href="#" onClick={closeAllMenus}>Fatuha (pvt.) Industrial Training Institute</a></li>
              <li><a href="#" onClick={closeAllMenus}>G.S Teachers Training College</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya Institute of Technology</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya College of Paramedics</a></li>
              <li><a href="#" onClick={closeAllMenus}>Himalaya Law College</a></li>
              <li><a href="#" onClick={closeAllMenus}>Patna Institute of Nursing & Para Medical Science</a></li>
              <li><a href="#" onClick={closeAllMenus}>Patna (pvt.) Industrial Training Institute</a></li>
              <li><a href="#" onClick={closeAllMenus}>Patliputra College of Nursing</a></li>
              <li><a href="#" onClick={closeAllMenus}>Patliputra College of Professional Education</a></li>
              <li><a href="#" onClick={closeAllMenus}>Dhanarua School of Nursing & Paramedics</a></li>
              <li><a href="#" onClick={closeAllMenus}>Dhanarua (pvt.) Industrial Training Institute</a></li>
              <li><a href="#" onClick={closeAllMenus}>Dhanarua School of Nursing & Paramedics (Pharmacy College)</a></li>
            </ul>
          </li>

          <li><Link to="/media" onClick={closeAllMenus}>Media Print</Link></li>
          <li><Link to="/contact" onClick={closeAllMenus}>Contact us</Link></li>
        </ul>
      </div>

      <div className={`off-canvas-sidebar ${isOffCanvasOpen ? 'open' : ''}`}>
        <div className="off-canvas-header">
          <h3>Our Colleges</h3>
          <button className="close-off-canvas" onClick={closeOffCanvas}>&times;</button>
        </div>
        <ul className="off-canvas-links">
          {/* Mobile colleges list */}
          <li><a href="#" onClick={closeAllMenus}>Medical College</a></li>
          <li><a href="#" onClick={closeAllMenus}>Ayurvedic College</a></li>
          <li><a href="#" onClick={closeAllMenus}>Pharmacy</a></li>
          <li><a href="#" onClick={closeAllMenus}>Nursing</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya Medical College & Hospital</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya Ayurvedic Medical College & Hospital</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya Institutions of Higher Education</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya Teacher's Training College</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya College of Pharmacy</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya College of Nursing</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya College of Professional Education</a></li>
          <li><a href="#" onClick={closeAllMenus}>Fatuha (pvt.) Industrial Training Institute</a></li>
          <li><a href="#" onClick={closeAllMenus}>G.S Teachers Training College</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya Institute of Technology</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya College of Paramedics</a></li>
          <li><a href="#" onClick={closeAllMenus}>Himalaya Law College</a></li>
          <li><a href="#" onClick={closeAllMenus}>Patna Institute of Nursing & Para Medical Science</a></li>
          <li><a href="#" onClick={closeAllMenus}>Patna (pvt.) Industrial Training Institute</a></li>
          <li><a href="#" onClick={closeAllMenus}>Patliputra College of Nursing</a></li>
          <li><a href="#" onClick={closeAllMenus}>Patliputra College of Professional Education</a></li>
          <li><a href="#" onClick={closeAllMenus}>Dhanarua School of Nursing & Paramedics</a></li>
          <li><a href="#" onClick={closeAllMenus}>Dhanarua (pvt.) Industrial Training Institute</a></li>
          <li><a href="#" onClick={closeAllMenus}>Dhanarua School of Nursing & Paramedics (Pharmacy College)</a></li>
        </ul>
      </div>

      <div className={`off-canvas-overlay ${isOffCanvasOpen ? 'open' : ''}`} onClick={closeOffCanvas}></div>
    </nav>
  );
};

export default Navbar;