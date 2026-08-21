import { ArrowRight, Calendar, Trophy, Users, Star } from "lucide-react";
import Link from "next/link";

const REGISTRATION_URL = "https://forms.gle/dXjc1KYHgcrW1z9d7";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-20 px-4 pt-24 sm:pt-28 md:pt-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d0920 0%, #1a0f3d 45%, #2D1B69 100%)",
      }}
    >
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-gold/20 fill-gold/10"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group border border-gold/20 glow-gold">
          <img
            src="/images/banner.jpg"
            alt="Manthan 2026 Event Banner"
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Theme Banner */}
        <div
          className="mb-8 rounded-2xl p-5 sm:p-6 text-center border border-gold/30 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(244,121,32,0.12) 100%)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />
          <p className="text-gold/70 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-2">
            ✦ Theme 2026 ✦
          </p>
          <h2 className="text-gold text-base sm:text-xl md:text-2xl font-bold leading-snug">
            "Viksit Bharat@2047 – Technology for Transformation"
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Online Quiz Card */}
          <div
            className="rounded-2xl p-6 md:p-8 border border-primary/30 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in relative overflow-hidden group"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-accent opacity-80" />
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full font-bold py-3.5 sm:py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center mb-5 group/btn text-sm sm:text-base shadow-lg glow-gold"
              style={{ background: "linear-gradient(135deg, #F5C518 0%, #D4A800 100%)", color: "#0d0920" }}
            >
              Register Now – Online Quiz
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" />
            </a>
            <p className="text-white/60 mb-5 text-center text-sm">
              Individual participation • Classes 9th to 12th • All streams
            </p>
            <div className="space-y-3">
              {[
                { icon: Calendar, text: "Quiz Date: 13th September 2026" },
                { icon: Calendar, text: "Registration Deadline: 6th September 2026" },
                { icon: Trophy, text: "E-Certificates for all participants" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center text-white/70 bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-gold/10 hover:border-gold/30 transition-all duration-200 text-sm">
                  <Icon className="w-4 h-4 mr-3 text-gold shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grand Finale Card */}
          <div
            className="rounded-2xl p-6 md:p-8 border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:-translate-y-1 animate-fade-in-delay relative overflow-hidden group"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-gold to-navy opacity-80" />
            <Link
              href="/rules"
              className="w-full font-bold py-3.5 sm:py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center mb-5 group/btn text-sm sm:text-base text-white shadow-lg glow-orange"
              style={{ background: "linear-gradient(135deg, #F47920 0%, #D4640A 100%)" }}
            >
              Grand Finale – Details & Rules
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
            <p className="text-white/60 mb-5 text-center text-sm">
              On-Campus at KIET, Ghaziabad • By Invitation Only
            </p>
            <div className="space-y-3">
              {[
                { icon: Calendar, text: "Dates: 30th September – 1st October 2026" },
                { icon: Users,    text: "Eligible: Classes 11th & 12th qualifiers" },
                { icon: Trophy,   text: "Top 3 per school invited to the Finale" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center text-white/70 bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-accent/10 hover:border-accent/30 transition-all duration-200 text-sm">
                  <Icon className="w-4 h-4 mr-3 text-accent shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
