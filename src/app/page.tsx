import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import InstitutionsBand from "./InstitutionsBand";
import SourcingSection from "./SourcingSection";
import FounderSection from "./FounderSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <>
      <a href="#activated-carbon" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <InstitutionsBand />
        <SourcingSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
      <Animations />
    </>
  );
}
