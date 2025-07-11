import './header.css';
import logo from '../../assets/images/logohm.png'

const Header = () => {
  return (
    <div className="top-header">
      <div className="logo-section">
        <img src={logo} alt="Himalaya Group Logo" />
      </div>
      <div className="banner-section">
        <img src="https://himalayagroupofinstitutions.com/assets/images/himalayalogo.jpeg" alt="Himalaya Group Banner" />
      </div>
    </div>
  );
};

export default Header;
