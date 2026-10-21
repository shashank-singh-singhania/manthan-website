import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WinnersShowcase from "@/components/WinnersShowcase";
import WinnersPopupModal from "@/components/WinnersPopupModal";
import AboutManthan from "@/components/AboutManthan";
import AboutKiet from "@/components/AboutKiet";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WinnersShowcase />
      <div id="about-manthan">
        <AboutManthan />
      </div>
      <AboutKiet />
      <Footer />
      <WinnersPopupModal />
    </div>
  );
}
