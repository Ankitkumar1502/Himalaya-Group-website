import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import AdmissionFormPage from './pages/AdmissionFormPage';
import ContactPage from './pages/ContactPage'
import Footer from './components/footer/Footer'
import ScrollToTopButton from './components/scrollToTop/ScrollToTopButton'

function App() {
  return (
    <Router> 
      <Header />
      <Navbar />

      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/admission-form" element={<AdmissionFormPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
