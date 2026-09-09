import { ArrowRight, Calendar, Trophy, Zap, Star, Award, CheckCircle2, Clock } from "lucide-react";
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
        {[...Array(24)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-gold/20 fill-gold/10"
            style={{
              width: `${(i % 5) * 2.5 + 4}px`,
              top: `${(i * 19) % 97}%`,
              left: `${(i * 31) % 97}%`,
              opacity: 0.2 + (i % 4) * 0.15,
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

        {/* Theme & Cash Prize Header */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div
            className="md:col-span-2 rounded-2xl p-5 sm:p-6 text-center md:text-left border border-gold/30 relative overflow-hidden flex flex-col justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(244,121,32,0.12) 100%)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="text-gold/80 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-1">
              ✦ Theme 2026 ✦
            </p>
            <h2 className="text-gold text-lg sm:text-xl md:text-2xl font-bold leading-snug">
              "Viksit Bharat@2047 – Technology for Transformation"
            </h2>
          </div>

          <div
            className="rounded-2xl p-5 sm:p-6 text-center border border-accent/40 relative overflow-hidden flex flex-col items-center justify-center glow-orange"
            style={{
              background: "linear-gradient(135deg, rgba(244,121,32,0.18) 0%, rgba(245,197,24,0.15) 100%)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="text-xs uppercase tracking-widest text-white/80 font-bold mb-1">
              🏆 Total Cash Prizes
            </span>
            <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">
              ₹1,00,000
            </span>
            <span className="text-xs text-gold font-medium mt-1">
              5 Winners • 5 Runner-Ups • 5 Consolation
            </span>
          </div>
        </div>

        {/* Focus Grid: Primary Online Quiz Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Primary Online Quiz Card (Spans 2 cols on desktop) */}
          <div
            className="lg:col-span-2 rounded-2xl p-6 md:p-8 border-2 border-gold/40 hover:border-gold/70 transition-all duration-300 shadow-2xl relative overflow-hidden group glow-gold"
            style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-gold to-accent" />
            
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold border border-gold/40">
                <Zap className="w-3.5 h-3.5 fill-gold" /> LIVE NATIONAL EVENT
              </span>
              <span className="text-xs font-semibold text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                Eligibility: Classes 11th & 12th (All Streams)
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              National Online Quiz Competition 2026
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-6">
              Individual online participation from anywhere in India. Test your knowledge in a high-energy, speed-based 30-minute challenge!
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                <Clock className="w-4 h-4 text-gold mx-auto mb-1" />
                <div className="text-xs text-white/60">Duration</div>
                <div className="text-sm font-bold text-white">30 Mins</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                <Zap className="w-4 h-4 text-gold mx-auto mb-1" />
                <div className="text-xs text-white/60">Questions</div>
                <div className="text-sm font-bold text-white">45 MCQs</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                <Award className="w-4 h-4 text-gold mx-auto mb-1" />
                <div className="text-xs text-white/60">Marking</div>
                <div className="text-sm font-bold text-white">+3 / -1</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                <Trophy className="w-4 h-4 text-gold mx-auto mb-1" />
                <div className="text-xs text-white/60">Tie-Breaker</div>
                <div className="text-sm font-bold text-white">9 Star Qs</div>
              </div>
            </div>

            {/* Important Dates List */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center justify-between text-sm bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-gold/10 transition-colors">
                <span className="flex items-center gap-2 text-white/80">
                  <Calendar className="w-4 h-4 text-gold" /> Registration Deadline
                </span>
                <span className="font-bold text-gold">26th September 2026</span>
              </div>
              <div className="flex items-center justify-between text-sm bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-gold/10 transition-colors">
                <span className="flex items-center gap-2 text-white/80">
                  <Calendar className="w-4 h-4 text-accent" /> Mock Test (Practice)
                </span>
                <span className="font-bold text-accent">29th – 30th September 2026</span>
              </div>
              <div className="flex items-center justify-between text-sm bg-white/10 border border-gold/40 px-4 py-2.5 rounded-xl">
                <span className="flex items-center gap-2 font-bold text-white">
                  <Trophy className="w-4 h-4 text-gold animate-bounce" /> National Quiz Day
                </span>
                <span className="font-extrabold text-white text-base">3rd October 2026</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex-1 font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center group/btn text-base shadow-xl glow-gold hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #F5C518 0%, #D4A800 100%)", color: "#0d0920" }}
              >
                Register Now for Online Quiz
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </a>
              <Link
                href="/rules"
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-white/20 hover:border-gold/50 text-white/90 hover:text-white text-sm font-semibold transition-all text-center"
              >
                View Rules & Format
              </Link>
            </div>
          </div>

          {/* Secondary Card: Cash Prizes & Offline Grand Finale Info */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Cash Prize Breakdown Box */}
            <div
              className="rounded-2xl p-6 border border-gold/30 shadow-lg relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-gold" />
                <h4 className="font-bold text-white text-lg">Cash Prize Distribution</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center bg-gold/10 border border-gold/30 p-2.5 rounded-lg">
                  <span className="font-semibold text-gold">🥇 5 Winners</span>
                  <span className="font-bold text-white">₹10,000 each</span>
                </div>
                <div className="flex justify-between items-center bg-accent/10 border border-accent/30 p-2.5 rounded-lg">
                  <span className="font-semibold text-accent">🥈 5 Runner-Ups</span>
                  <span className="font-bold text-white">₹6,000 each</span>
                </div>
                <div className="flex justify-between items-center bg-primary/20 border border-primary/40 p-2.5 rounded-lg">
                  <span className="font-semibold text-white/90">🥉 5 Consolation</span>
                  <span className="font-bold text-white">₹4,000 each</span>
                </div>
              </div>
              <p className="text-xs text-white/60 mt-3 text-center">
                🎓 Official E-Certificates for all participating students
              </p>
            </div>

            {/* Offline Qualifier Preview Box */}
            <div
              className="rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all shadow-lg"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🏛️</span>
                <h4 className="font-bold text-white text-base">Offline Final Round</h4>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-3">
                The Online Quiz serves as the qualifying round. The <strong className="text-gold">3 best-performing students</strong> from each school qualify for the On-Campus Finale at KIET Campus.
              </p>
              <div className="flex items-center justify-between text-xs text-white/60 bg-white/5 p-2 rounded-lg border border-white/10">
                <span>Finale Date:</span>
                <span className="font-bold text-accent">Mid-October 2026 (Tentative)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
