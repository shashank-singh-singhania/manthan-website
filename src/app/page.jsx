import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutKiet from "@/components/AboutKiet";
import AboutManthan from "@/components/AboutManthan";
import PartnersSection from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-amber-50">
      <Header />
      <HeroSection />
      <AboutKiet />
      <AboutManthan />
      <PartnersSection />
      <Footer />
    </div>
  );
}
