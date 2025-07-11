// src/components/side/SidePanel.jsx (assuming this is the correct path)
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'; // <== IMPORTANT: Import Link
import "./sidePanel.css";

const SidePanel = () => {
  return (
    <div className="side-panel">
      {/* Apply Now button - now a Link */}
      <Link to="/admission-form" className="side-button blue"> {/* Link to the admission form path */}
        <span className="icon-only">📰</span>
        <span className="label">Apply Now</span>
      </Link>

      {/* Phone number - use 'a' tag with tel: for phone calls */}
      <a href="tel:9334767990" className="side-button red">
        <FaPhoneAlt className="icon-only" />
        <span className="label">9334767990</span>
      </a>

      {/* Admission Form button - now a Link */}
      <Link to="/admission-form" className="side-button blue"> {/* Link to the admission form path */}
        <span className="icon-only">📝</span>
        <span className="label">Admission Form</span>
      </Link>

      {/* Notices button - assuming it's a separate page */}
       <a
        href='https://himalayagroupofinstitutions.com/new/WhatsApp%20Image%202025-06-10%20at%2011.46.26%20AM.jpeg' 
        target="_blank"              
        rel="noopener noreferrer"     
        className="side-button red"
      >
        <span className="icon-only">📢</span>
        <span className="label">Notices</span>
      </a>
    </div>
  );
};

export default SidePanel;