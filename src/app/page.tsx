import Banner from "../components/Banner";
import "../../globals.css";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";
import PromoBanner from "@/components/PromoBanner";
import GlobalCouriers from "@/components/GlobalCouriers";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Banner />
      <FeatureSection />
      <AboutSection />
      <Step3 />
      <Step4 />
      <PromoBanner />
      <GlobalCouriers />
    </div>
  );
}
