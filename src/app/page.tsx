import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";
import HeroSection from "./HeroSection";
import TrustBar from "./TrustBar";
import AboutSection from "./AboutSection";
import SourcingSection from "./SourcingSection";
import ProductsSection from "./ProductsSection";
import FounderSection from "./FounderSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <SourcingSection />
        <ProductsSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
      <Animations />
    </>
  );
}
