import { Trophy, Award, Users, ArrowRight, Youtube, Zap, Clock, Star, Gift, CheckCircle2 } from "lucide-react";
import categories from "@/data/manthanCategories";
import { onlinePrizes } from "@/data/onlineData";

const REGISTRATION_URL = "https://forms.gle/dXjc1KYHgcrW1z9d7";
const YOUTUBE_URL = "https://youtu.be/2s2jkFWbda4?si=f0Dxkk0XyYV2HOYe";

const AboutManthan = () => {
  return (
    <section
      id="about-manthan"
      className="py-16 md:py-24 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #FAF8FF 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#2D1B69", transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#F47920", transform: "translate(40%, 40%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            National Inter-School Quiz Competition
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2D1B69 0%, #7C4DFF 50%, #F5C518 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MANTHAN 2026
            </span>
          </h2>
          <div className="flex items-center justify-center gap-1 mx-auto">
            <div className="h-1 w-12 rounded-full" style={{ background: "#2D1B69" }} />
            <div className="h-1 w-6 rounded-full" style={{ background: "#F5C518" }} />
            <div className="h-1 w-12 rounded-full" style={{ background: "#F47920" }} />
          </div>
        </div>

        {/* Intro card */}
        <div
          className="mb-12 rounded-2xl p-8 border relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(45,27,105,0.06) 0%, rgba(244,121,32,0.06) 100%)",
            borderColor: "rgba(45,27,105,0.15)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
            style={{ background: "linear-gradient(180deg, #2D1B69, #F5C518, #F47920)" }}
          />
          <p className="text-textLight text-justify leading-relaxed mb-3 pl-4">
            Organized by the{" "}
            <span className="font-semibold text-primary">Department of PR and International Relations</span>{" "}
            at KIET Deemed To Be University, Ghaziabad, Manthan is a premier National Inter-School Quiz Competition designed to foster critical thinking, sharp intellect, and healthy competitive spirit among young minds across India.
          </p>
          <p className="text-textLight text-justify leading-relaxed pl-4">
            After two resounding editions, Manthan returns with its much-awaited 2026 edition under the inspiring theme:{" "}
            <span className="font-semibold text-primary">
              "Technology for Transformation - Viksit Bharat@2047 Mission"
            </span>
            . For this edition, the primary focus is on an expansive, high-stakes{" "}
            <strong className="text-primary">National Online Quiz on 3rd October 2026</strong> for students of Classes 11th &amp; 12th.
          </p>
        </div>

        {/* Vision + Quizzing Partner */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Vision */}
          <div className="rounded-2xl p-8 border border-primary/15 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 pointer-events-none"
              style={{ background: "#2D1B69" }}
            />
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(135deg, #2D1B69, #4527A0)" }}
              >
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary">Vision</h3>
            </div>
            <p className="text-textLight text-justify leading-relaxed">
              Manthan is not just a competition — it is an educational movement that empowers students with confidence, broadens horizons, and prepares tomorrow's leaders to excel on national and global intellectual stages.
            </p>
          </div>

          {/* Collaboration */}
          <div className="rounded-2xl p-8 border border-accent/20 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 pointer-events-none"
              style={{ background: "#F47920" }}
            />
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(135deg, #F47920, #FF9A45)" }}
              >
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-accent">Quizzing Partner</h3>
            </div>
            <p className="text-textLight leading-relaxed mb-2 text-justify">
              In collaboration with <span className="font-bold text-textDark text-lg">Quizzinga</span>
            </p>
            <p className="text-textLight leading-relaxed text-justify">
              Organized in active collaboration with Quizzinga to craft an intellectually exhilarating, fast-paced, and meticulously curated quizzing experience.
            </p>
          </div>
        </div>

        {/* ₹1,00,000 Cash Prizes Section */}
        <div className="mb-12 bg-white rounded-2xl p-8 border border-gold/30 shadow-xl relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-1.5"
            style={{ background: "linear-gradient(90deg, #F5C518, #F47920, #2D1B69)" }}
          />
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-xs font-bold text-navy uppercase tracking-widest mb-3">
              <Trophy className="w-4 h-4 text-accent" /> Guaranteed Rewards
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-textDark mb-2">
              Cash Prizes Worth <span className="text-primary">₹1,00,000</span>
            </h3>
            <p className="text-textLight max-w-xl mx-auto text-sm sm:text-base">
              Rewarding excellence and academic brilliance across schools nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {onlinePrizes.map((prize, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 border text-center transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md relative overflow-hidden"
                style={{
                  background: idx === 0
                    ? "linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(245,197,24,0.03) 100%)"
                    : idx === 1
                    ? "linear-gradient(135deg, rgba(244,121,32,0.12) 0%, rgba(244,121,32,0.03) 100%)"
                    : "linear-gradient(135deg, rgba(45,27,105,0.08) 0%, rgba(45,27,105,0.02) 100%)",
                  borderColor: idx === 0 ? "rgba(245,197,24,0.4)" : idx === 1 ? "rgba(244,121,32,0.3)" : "rgba(45,27,105,0.2)",
                }}
              >
                <div className="text-xs font-extrabold uppercase tracking-wider mb-2 text-textLight">
                  {prize.badge}
                </div>
                <div className="text-3xl font-black text-textDark mb-1">
                  {prize.amount}
                </div>
                <div className="text-xs text-textLight font-medium">
                  each ({prize.category})
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/60 text-xs font-semibold text-primary">
                  Total Pool: {prize.total}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-primary/10 rounded-xl p-4 text-center">
            <p className="text-textLight text-xs sm:text-sm font-medium">
              📜 <strong>E-Certificates:</strong> Provided to <strong>all participants</strong> of Manthan 2026.
            </p>
          </div>
        </div>

        {/* Competition Structure (Deep Focus on Online Quiz + Offline Qualifier in Last) */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-primary/10 bg-white">
          <div
            className="p-6 text-white text-center"
            style={{ background: "linear-gradient(135deg, #0d0920, #2D1B69)" }}
          >
            <Zap className="w-8 h-8 text-gold mx-auto mb-2" />
            <h3 className="text-2xl md:text-3xl font-bold">Competition Format &amp; Stages</h3>
            <p className="text-white/70 text-sm mt-1">
              National Online Round with On-Campus Grand Finale Progression
            </p>
          </div>

          {/* Step 1: Main Online Round */}
          <div className="p-8 border-b border-primary/10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gold/20 text-navy font-black text-lg flex items-center justify-center border border-gold/40">
                  1
                </span>
                <div>
                  <h4 className="text-xl font-bold text-primary">Stage 1: National Online Quiz (Primary Round)</h4>
                  <p className="text-xs font-semibold text-accent">Quiz Date: 3rd October 2026 | Practice Mock: 29–30 Sep 2026</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                Individual Online Mode
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-surface p-4 rounded-xl border border-primary/10">
                <p className="text-xs text-textLight font-semibold uppercase mb-1">Eligibility</p>
                <p className="text-sm font-bold text-textDark">Classes 11th &amp; 12th only</p>
                <p className="text-xs text-textLight">Science, Commerce, or Humanities</p>
              </div>
              <div className="bg-surface p-4 rounded-xl border border-primary/10">
                <p className="text-xs text-textLight font-semibold uppercase mb-1">Time &amp; Questions</p>
                <p className="text-sm font-bold text-textDark">45 MCQs in 30 Minutes</p>
                <p className="text-xs text-textLight">Time-based rapid evaluation</p>
              </div>
              <div className="bg-surface p-4 rounded-xl border border-primary/10">
                <p className="text-xs text-textLight font-semibold uppercase mb-1">Marking Scheme</p>
                <p className="text-sm font-bold text-textDark">+3 for Correct | -1 for Incorrect</p>
                <p className="text-xs text-textLight">Negative marking applicable</p>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-gold shrink-0 mt-0.5 fill-gold" />
                <div className="text-xs sm:text-sm text-textDark leading-relaxed">
                  <strong>Tie-Breaker Star Questions (*):</strong> Questions <strong>Q5, Q10, Q15, Q20, Q25, Q30, Q35, Q40, and Q45</strong> are star-marked. In the event of tied scores, accuracy on these star questions and faster overall completion time decide rank.
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md hover:shadow-gold/30"
                style={{ background: "linear-gradient(135deg, #F5C518, #D4A800)", color: "#0d0920" }}
              >
                Register Now for Online Quiz (Deadline: 26 Sep)
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Step 2: Offline Qualifier Section (Placed at the end of structure) */}
          <div className="p-8 bg-surface/60">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-accent/20 text-accent font-black text-lg flex items-center justify-center border border-accent/40">
                2
              </span>
              <div>
                <h4 className="text-xl font-bold text-accent">Stage 2: On-Campus Grand Finale (Offline Qualifier)</h4>
                <p className="text-xs font-semibold text-textLight">Dates: Mid-October 2026 (Tentative) | KIET Campus, Ghaziabad</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-accent/20 shadow-sm space-y-3">
              <p className="text-textLight text-sm leading-relaxed">
                • <strong>Qualifying Criteria:</strong> The Online Round serves as the qualifying gateway. The <strong className="text-primary">3 best-performing students from each participating school</strong> will receive an official invitation to compete in the Grand Finale at KIET Campus.
              </p>
              <p className="text-textLight text-sm leading-relaxed">
                • <strong>Hospitality:</strong> KIET Deemed To Be University will provide accommodation, hospitality, and meals upon prior intimation.
              </p>
              <p className="text-textLight text-sm leading-relaxed">
                • <strong>Recognition:</strong> Finalists compete on-stage before an esteemed audience and receive Certificates of Merit.
              </p>
            </div>
          </div>
        </div>

        {/* Domains of Discovery */}
        <div
          className="mb-12 rounded-2xl p-8 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d0920 0%, #2D1B69 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="text-center mb-8 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Domains of Discovery
            </h3>
            <p className="text-gold/70 text-sm">
              Seven diverse domains designed around the acronym MANTHAN
            </p>
          </div>

          <div className="flex justify-center relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 max-w-7xl">
              {categories.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl p-4 text-center border cursor-pointer flex flex-col justify-center group animate-scale-in transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      borderColor: "rgba(245,197,24,0.2)",
                      animationDelay: `${idx * 80}ms`,
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "rgba(245,197,24,0.15)" }}
                    >
                      <Icon className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="font-bold text-sm text-white mb-0.5 group-hover:text-gold transition-colors duration-300">
                      {item.word}
                    </div>
                    <div className="text-xs text-white/50 italic">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center rounded-2xl p-10 relative overflow-hidden border border-gold/20"
          style={{ background: "linear-gradient(135deg, rgba(45,27,105,0.06) 0%, rgba(245,197,24,0.06) 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />
          <Trophy className="w-12 h-12 mx-auto mb-4 text-gold" />
          <h3 className="md:text-3xl text-2xl font-bold mb-3 text-textDark">
            Register for Manthan 2026 Online Quiz
          </h3>
          <p className="md:text-lg text-sm text-textLight mb-8 max-w-2xl mx-auto">
            Classes 11th &amp; 12th students: compete for ₹1,00,000 in Cash Prizes and secure your school's spot in the Grand Finale!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group/btn text-sm shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #F5C518, #D4A800)", color: "#0d0920" }}
            >
              Register Now (Free)
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group/btn text-sm text-white shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #F47920, #D4640A)" }}
            >
              <Youtube className="mr-2 w-4 h-4" />
              Watch Manthan 2.0 Glimpse
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManthan;
