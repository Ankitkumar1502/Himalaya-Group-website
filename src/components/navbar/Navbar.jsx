import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky-navbar">
      <div className="nav-container">
        <div className="brand">Himalaya Group of Institution</div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><a href="#">About us</a></li>

          <li className="dropdown">
            <a href="#">Our Colleges ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">Medical College</a></li>
              <li><a href="#">Ayurvedic College</a></li>
              <li><a href="#">Pharmacy</a></li>
              <li><a href="#">Nursing</a></li>
               <li><a href="#">Himalaya Medical College & Hospital</a></li>
              <li><a href="#">Himalaya Ayurvedic Medical College & Hospital</a></li>
              <li><a href="#">Himalaya Institutions of Higher Education</a></li>
              <li><a href="#">Himalaya Teacher's Training College</a></li>
              <li><a href="#">Himalaya College of Pharmacy</a></li>
              <li><a href="#">Himalaya College of Nursing</a></li>
              <li><a href="#">Himalaya College of Professional Education</a></li>
              <li><a href="#">Fatuha (pvt.) Industrial Training Institute</a></li>
              <li><a href="#">G.S Teachers Training College</a></li>
              <li><a href="#">Himalaya Institute of Technology</a></li>
              <li><a href="#">Himalaya College of Paramedics</a></li>
              <li><a href="#">Himalaya Law College</a></li>
              <li><a href="#">Patna Institute of Nursing & Para Medical Science</a></li>
              <li><a href="#">Patna (pvt.) Industrial Training Institute</a></li>
              <li><a href="#">Patliputra College of Nursing</a></li>
              <li><a href="#">Patliputra College of Professional Education</a></li>
              <li><a href="#">Dhanarua School of Nursing & Paramedics</a></li>
              <li><a href="#">Dhanarua (pvt.) Industrial Training Institute</a></li>
              <li><a href="#">Dhanarua School of Nursing & Paramedics (Pharmacy College)</a></li>
            </ul>
          </li>

           <li><Link to="/media">Media Print</Link></li> 
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
