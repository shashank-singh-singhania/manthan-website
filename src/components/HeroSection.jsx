import { ArrowRight, Calendar, Award } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
          <div className="relative h-[30vh] md:h-[40vh] lg:h-[40vh] overflow-hidden">
            <img
              src="https://kiet-website-client-rhxb.vercel.app/assets/images/kiet/main/homepage%20banner_6.webp"
              alt="Manthan Event Banner"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            <Link
              href="/registration/online"
              className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center mb-2 group/btn"
            >
              Register for Online Quiz
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </Link>

            <a
              href=""
              // target="_blank"
              className="flex items-center justify-center text-sm text-primary font-medium mb-6 hover:text-primary/80"
            >
              How to Register for the Online Quiz?
            </a>

            <p className="text-textLight mb-6 text-center">
              Participate from anywhere! Top 150 teams advance to on-campus
              rounds.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-textLight bg-gray-50 p-3 rounded-lg transition-all duration-200 hover:bg-primary/5">
                <Calendar className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>22nd - 23rd November 2025</span>
              </div>
              <div className="flex items-center text-textLight bg-gray-50 p-3 rounded-lg transition-all duration-200 hover:bg-primary/5">
                <Award className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>
                  1st Prize: ₹5,000 | 2nd Prize: ₹5,000 | 3rd Prize: ₹5,000
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-delay">
            <Link
              href="/registration/offline"
              className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center mb-2 group/btn"
            >
              Register for Offline Quiz
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </Link>

            <a
              href=""
              // target="_blank"
              className="flex items-center justify-center text-sm text-accent font-medium mb-6 hover:text-accent/80"
            >
              How to Register for the Offline Quiz?
            </a>
            <p className="text-textLight mb-6 text-center">
              Top 150 teams compete at KIET Campus for the ultimate glory!
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-textLight bg-gray-50 p-3 rounded-lg transition-all duration-200 hover:bg-accent/5">
                <Calendar className="w-5 h-5 mr-3 text-accent shrink-0" />
                <span>5th - 6th December 2025</span>
              </div>
              <div className="flex items-center text-textLight bg-gray-50 p-3 rounded-lg transition-all duration-200 hover:bg-accent/5">
                <Award className="w-5 h-5 mr-3 text-accent shrink-0" />
                <span>
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
