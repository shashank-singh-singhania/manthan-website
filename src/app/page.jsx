import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutKiet from "@/components/AboutKiet";
import AboutManthan from "@/components/AboutManthan";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutKiet />
      <div id="about-manthan">
        <AboutManthan />
        <Footer />
      </div>
    </div>
  );
}
