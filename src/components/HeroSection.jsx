import { ArrowRight, Calendar, Award } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-20 px-4 pt-24 sm:pt-28 md:pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl mb-6 sm:mb-8 group">
          <div className="relative w-full overflow-hidden">
            <img
              src="/images/banner.jpg"
              alt="Manthan Event Banner"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            <Link
              href="/registration/online"
              className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-200 flex items-center justify-center mb-4 group/btn text-sm sm:text-base"
            >
              Register for Online Quiz
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" />
            </Link>

            <p className="text-textLight mb-4 sm:mb-6 text-center text-sm sm:text-base">
              Participate online! Top 150 teams advance to on-campus rounds.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center text-textLight bg-gray-50 p-2.5 sm:p-3 rounded-lg transition-all duration-200 hover:bg-primary/5 text-sm sm:text-base">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-primary shrink-0" />
                <span>22nd - 23rd November 2025</span>
              </div>
              <div className="flex items-start text-textLight bg-gray-50 p-2.5 sm:p-3 rounded-lg transition-all duration-200 hover:bg-primary/5 text-sm sm:text-base">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-primary shrink-0 mt-0.5" />
                <span className="leading-tight">
                  1st Prize: ₹5,000 | 2nd Prize: ₹5,000 | 3rd Prize: ₹5,000
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-delay">
            <Link
              href="/registration/offline"
              className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-200 flex items-center justify-center mb-4 group/btn text-sm sm:text-base"
            >
              Register for Offline Quiz
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" />
            </Link>

            <p className="text-textLight mb-4 sm:mb-6 text-center text-sm sm:text-base">
              Top 150 teams compete at KIET Campus for the ultimate glory!
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center text-textLight bg-gray-50 p-2.5 sm:p-3 rounded-lg transition-all duration-200 hover:bg-accent/5 text-sm sm:text-base">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-accent shrink-0" />
                <span>5th - 6th December 2025</span>
              </div>
              <div className="flex items-start text-textLight bg-gray-50 p-2.5 sm:p-3 rounded-lg transition-all duration-200 hover:bg-accent/5 text-sm sm:text-base">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-accent shrink-0 mt-0.5" />
                <span className="leading-tight">
                  1st Prize: ₹11,000 | 2nd Prize: ₹7,000 | 3rd Prize: ₹5,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
