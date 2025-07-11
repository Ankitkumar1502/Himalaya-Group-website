import AboutUsSection from "../components/aboutUs/AboutUsSection";
import CollegeFacilitiesSection from "../components/collegeFacilities/CollegeFacilitiesSection";
import HeroCarousel from "../components/hero/HeroCarousel";
import OurCollegesSection from "../components/ourColleges/OurCollegesSection";
import StatsSection from '../components/stats/StatsSection'
import CampusLifeSection from '../components/campusLife/CampusLifeSection'
import MentorSection from '../components/mentorSection/MentorSection'

const HomePage = () => {
  return (
    <>
      <HeroCarousel/>
      <AboutUsSection/>
      <StatsSection />
      <OurCollegesSection/>
      <CollegeFacilitiesSection/>
      <CampusLifeSection />
      <MentorSection />
    </>
  );
};

export default HomePage;