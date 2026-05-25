import AboutMissions from "../components/AboutusSections/AboutMission";
import AboutTeam from "../components/AboutusSections/AboutTeam";
import Achievement from "../components/AboutusSections/Achievement";
import Features from "../components/AboutusSections/Features";
import HeroSection from "../components/AboutusSections/HeroSection";
import { Helmet } from "react-helmet";

const AboutUs = () => {
    return (
        <>
        <Helmet>
        <title>About Us | Vision Tech Barcode Solution</title>
        <link rel="icon" href="/imgs/favicon2.ico" type="image/png" />
      </Helmet>
        <HeroSection />
        <AboutMissions />
        <AboutTeam />
        <Achievement />
        <Features />
        </>
    );
};

export default AboutUs;
