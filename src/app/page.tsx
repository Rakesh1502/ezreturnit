import Banner from "../components/Banner";
import "../../globals.css";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeatureSection />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
