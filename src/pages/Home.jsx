import HeroSection from "../components/HomeSections/HeroSection";
import ServicesSection from "../components/HomeSections/ServicesSection";
import AboutSection from "../components/HomeSections/AboutSection";
import FeaturesSection from "../components/HomeSections/FeaturesSection";
import ContactBanner from "../components/HomeSections/ContactBanner";
import ProductSection from "../components/HomeSections/ProductSection";
import LabelsSection from "../components/HomeSections/LabelsSection";


const Home = () => {
  return (
    <div>
      

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LabelsSection />
      <FeaturesSection />
      <ProductSection />
      <ContactBanner />
    </div>
  );
};

export default Home;
