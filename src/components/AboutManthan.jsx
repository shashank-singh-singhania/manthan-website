import { Trophy, Award, Users, ArrowRight } from "lucide-react";
import categories from "@/data/manthanCategories";
import Link from "next/link";

const AboutManthan = () => {
  const onlinePrizes = [
    { position: "1st", amount: "₹5,000" },
    { position: "2nd", amount: "₹5,000" },
    { position: "3rd", amount: "₹5,000" },
    { position: "4th", amount: "₹4,000" },
    { position: "5th", amount: "₹4,000" },
    { position: "6th", amount: "₹4,000" },
    { position: "7th", amount: "₹2,000" },
    { position: "8th", amount: "₹2,000" },
    { position: "9th", amount: "₹2,000" },
    { position: "10th", amount: "₹2,000" },
  ];

  const finalePrizes = [
    { position: "1st Prize", amount: "₹11,000" },
    { position: "2nd Prize", amount: "₹7,000" },
    { position: "1st Prize (Special Students)", amount: "₹5,000" },
  ];

  return (
    <section className="md:py-20 py-10 px-4 font-inter min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 ">
          <h2
            className={`text-2xl md:text-4xl font-extrabold mb-3 leading-tight`}
          >
            About{" "}
            <span className="text-accent relative inline-block group">
              MANTHAN 3.0
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full transition-all duration-500 hover:w-32"></div>
        </div>

        <div className="mb-12 bg-primary/5 rounded-2xl p-8 border border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <p className="text-textLight text-justify leading-relaxed mb-1">
            Organized by the Department of PR and International Relations at
            KIET Group of Institutions(Deemed-to-be University), Manthan is an
            inter-school nationwide quiz competition that fosters critical
            thinking, sharpens intellect, and fuels the spirit of healthy
            competition among schools across the country.
          </p>
          <p className="text-textLight text-justify leading-relaxed">
            After the resounding success of its previous two editions in 2022
            and 2023, Manthan returns this year with its much-awaited 3rd
            edition, celebrating a grandeur amalgamation of knowledge,
            creativity, and curiosity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-md border border-primary/20 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300 ">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Vision</h3>
            </div>
            <p className="text-textLight text-justify leading-relaxed relative z-10">
              Manthan is not just a competition - it is a movement that aims to
              empower students with confidence, broaden their horizons, and
              prepare them to shine on national and global platforms. By
              fostering curiosity and a quest for knowledge, it instills the
              belief that learning is a lifelong journey.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-accent/20 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center transition-transform duration-300 ">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent">Quiz Master</h3>
            </div>
            <p className="text-textLight leading-relaxed mb-3 text-justify relative z-10">
              <span className="font-semibold text-textDark">
                Mr. Gautam Bose
              </span>
              , Event Manager and CEO of Greycells
            </p>
            <p className="text-textLight leading-relaxed text-justify relative z-10">
              Renowned for his unmatched energy and vast experience, Mr. Bose
              has made Manthan a memorable intellectual fest for participants
              and audiences alike.
            </p>
          </div>
        </div>

        <div className="mb-12 bg-primary rounded-2xl p-8 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Domains of Discovery
            </h3>
            <p className="text-gray-100 md:text-lg text-sm">
              Seven diverse domains designed around the acronym MANTHAN
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 max-w-7xl">
              {categories.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 text-center border border-primary/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer min-w-[120px] flex flex-col justify-center group animate-scale-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="font-semibold text-sm md:text-base text-primary mb-1 transition-colors duration-300 group-hover:text-accent">
                      {item.word}
                    </div>
                    <div className="text-xs text-textLight italic">
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8 pt-10">
            <div className="inline-block">
              <Trophy className="w-12 h-12 mx-auto mb-3 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-2">
              Prizes Worth ₹1 Lakh
            </h3>
            <p className="text-textLight">
              Every participant receives a certificate of participation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h4 className="md:text-2xl text-xl font-bold mb-6 text-primary text-center">
                Online Quiz Winners
              </h4>
              <div className="space-y-3">
                {onlinePrizes.map((prize, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 rounded-lg 
                        bg-gray-50 border border-gray-200 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="font-semibold text-textDark group-hover:text-primary transition-colors duration-200">
                      {prize.position} Prize
                    </span>
                    <span className="font-bold text-lg text-primary transition-transform duration-200 group-hover:scale-110">
                      {prize.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h4 className="md:text-2xl text-xl font-bold mb-6 text-accent text-center">
                Grand Finale (On-Campus)
              </h4>
              <div className="space-y-4 pb-10">
                {finalePrizes.map((prize, idx) => (
                  <div
                    key={idx}
                    className="bg-primary/5 border border-primary/20 rounded-lg p-6 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-textDark group-hover:text-primary transition-colors duration-200">
                        {prize.position}
                      </span>
                      <span className="font-bold text-2xl text-primary transition-transform duration-200 group-hover:scale-110">
                        {prize.amount}
                      </span>
                    </div>
                    {prize.position.includes("Special") && (
                      <p className="text-sm text-textLight mt-2 italic">
                        For specially-abled students
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center bg-primary/5 rounded-xl p-10 mt-6 border border-primary/20 hover:bg-primary/10 transition-all duration-300 group">
                <h3 className="md:text-3xl text-2xl font-bold mb-4">
                  Join Us at Manthan 3.0
                </h3>
                <p className="md:text-lg text-sm text-textLight mb-6 max-w-3xl mx-auto">
                  Be a part of an unforgettable knowledge festival where
                  intellect meets inspiration. Challenge yourself, expand your
                  horizons, and shine on the national stage!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm w-full max-w-xl mx-auto">
                  <Link
                    href="/registration/online"
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group/btn text-xs sm:text-base shadow-md hover:shadow-lg"
                  >
                    Register for Online
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href="/registration/offline"
                    className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group/btn text-xs sm:text-base shadow-md hover:shadow-lg"
                  >
                    Register for Offline
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManthan;
