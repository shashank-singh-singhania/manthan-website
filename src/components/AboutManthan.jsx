import { Trophy, Award, Users, ArrowRight, Youtube, Cpu, Zap } from "lucide-react";
import categories from "@/data/manthanCategories";

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
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#2D1B69", transform: "translate(-50%, -50%)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#F47920", transform: "translate(40%, 40%)" }} />

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
          <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
            style={{ background: "linear-gradient(180deg, #2D1B69, #F5C518, #F47920)" }} />
          <p className="text-textLight text-justify leading-relaxed mb-3 pl-4">
            Organized by the{" "}
            <span className="font-semibold text-primary">Department of PR and International Relations</span>{" "}
            at KIET Deemed To Be University, Manthan is a National Inter-School Quiz Competition that
            fosters critical thinking, sharpens intellect, and fuels the spirit of healthy competition
            among schools across the country.
          </p>
          <p className="text-textLight text-justify leading-relaxed pl-4">
            After two successful editions, Manthan returns with its much-awaited 2026 edition under
            the inspiring theme:{" "}
            <span className="font-semibold text-primary">
              "Viksit Bharat@2047 – Technology for Transformation"
            </span>{" "}
            — celebrating a grand amalgamation of knowledge, creativity, and curiosity among young
            minds from Classes 9th to 12th across India.
          </p>
        </div>

        {/* Vision + Quiz Master */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Vision */}
          <div className="rounded-2xl p-8 border border-primary/15 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 pointer-events-none"
              style={{ background: "#2D1B69" }} />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(135deg, #2D1B69, #4527A0)" }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary">Vision</h3>
            </div>
            <p className="text-textLight text-justify leading-relaxed">
              Manthan is not just a competition — it is a movement that aims to empower students with
              confidence, broaden their horizons, and prepare them to shine on national and global
              platforms. By fostering curiosity and a quest for knowledge, it instills the belief
              that learning is a lifelong journey.
            </p>
          </div>

          {/* Quiz Master */}
          <div className="rounded-2xl p-8 border border-accent/20 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 pointer-events-none"
              style={{ background: "#F47920" }} />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(135deg, #F47920, #FF9A45)" }}>
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-accent">Quiz Master</h3>
            </div>
            <p className="text-textLight leading-relaxed mb-3 text-justify">
              <span className="font-semibold text-textDark">Mr. Gautam Bose</span>,{" "}
              Event Manager and CEO of Greycells
            </p>
            <p className="text-textLight leading-relaxed text-justify">
              Renowned for his unmatched energy and vast experience, Mr. Bose has made Manthan a
              memorable intellectual fest for participants and audiences alike.
            </p>
          </div>
        </div>

        {/* Competition Structure */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-primary/10">
          <div className="p-6 text-white text-center"
            style={{ background: "linear-gradient(135deg, #0d0920, #2D1B69)" }}>
            <Zap className="w-8 h-8 text-gold mx-auto mb-2" />
            <h3 className="text-2xl md:text-3xl font-bold">Competition Structure</h3>
          </div>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-primary/10 bg-white">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💻</span>
                <div>
                  <h4 className="text-lg font-bold text-primary">Online Round</h4>
                  <p className="text-xs text-gold font-semibold">13 September 2026</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Open to Classes 9th – 12th (all streams)",
                  "Individual participation, from anywhere",
                  "30-minute MCQ quiz with negative marking",
                  "Class 9 & 10 winners: Goodies & Recognition",
                  "E-Certificates for all participants",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-textLight text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏆</span>
                <div>
                  <h4 className="text-lg font-bold text-accent">Grand Finale</h4>
                  <p className="text-xs text-accent font-semibold">30 Sep – 1 Oct 2026</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {[
                  "For Class 11th & 12th qualifiers only",
                  "Top 3 students per school invited",
                  "On-Campus at KIET, Ghaziabad",
                  "~150 students from across India",
                  "Certificates of Merit for all finalists",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-textLight text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Domains of Discovery */}
        <div
          className="mb-12 rounded-2xl p-8 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d0920 0%, #2D1B69 100%)" }}
        >
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

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
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, #F5C518 0, #F5C518 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />
          <Trophy className="w-12 h-12 mx-auto mb-4 text-gold" />
          <h3 className="md:text-3xl text-2xl font-bold mb-3 text-textDark">
            Join Us at Manthan 2026
          </h3>
          <p className="md:text-lg text-sm text-textLight mb-8 max-w-2xl mx-auto">
            Be a part of an unforgettable knowledge festival where intellect meets inspiration.
            Challenge yourself, expand your horizons, and shine on the national stage!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group/btn text-sm shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #F5C518, #D4A800)", color: "#0d0920" }}
            >
              Register Now
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
              Watch Manthan 2.0
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManthan;
