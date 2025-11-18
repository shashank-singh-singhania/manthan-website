import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutKiet from "@/components/AboutKiet";
import AboutManthan from "@/components/AboutManthan";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="lg:sticky top-0 right-0 w-full">
        <HeroSection />
      </div>
      <AboutKiet />
      <div id="about-manthan" className="relative top-0 z-30 bg-white">
        <AboutManthan />
        <Footer />
      </div>
    </div>
  );
}
