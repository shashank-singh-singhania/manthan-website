import { onlineRules } from "@/data/onlineData.js";
import { onlineEligibility } from "@/data/onlineData.js";
import { onlineStructure } from "@/data/onlineData.js";
import { onlinePrizes } from "@/data/onlineData.js";
import { Star, Trophy, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const REGISTRATION_URL = "https://forms.gle/dXjc1KYHgcrW1z9d7";

const OnlineRulesComp = () => {
  return (
    <>
      <div className="mt-12 mb-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1 rounded-full border border-accent/20">
            Primary Round Focus
          </span>
          <h3 className="md:text-3xl text-2xl font-black text-center mt-3 text-textDark">
            National Online Quiz Competition
          </h3>
          <p className="text-textLight text-sm mt-1">
            Official Guidelines, Structure &amp; Marking Scheme
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div className="bg-background rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-all duration-300">
          <h3 className="md:text-xl text-lg font-bold text-textDark mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Eligibility &amp; Registration
          </h3>
          <ul className="space-y-3 text-textLight text-sm">
            {onlineEligibility.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-all duration-300">
          <h3 className="md:text-xl text-lg font-bold text-textDark mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            Format &amp; Time-Based Structure
          </h3>
          <ul className="space-y-3 text-textLight text-sm">
            {onlineStructure.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-1.5 mr-3 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Marking Scheme Box */}
      <div className="mb-6 rounded-2xl p-6 md:p-8 border border-gold/40 shadow-md bg-gradient-to-r from-gold/10 via-white to-accent/10">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-6 h-6 text-gold" />
          <h3 className="text-xl font-black text-textDark">
            Marking Scheme &amp; Question Pattern
          </h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mb-2">
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
            <span className="text-xs font-semibold text-textLight uppercase">Correct Answer</span>
            <div className="text-2xl font-black text-green-600 mt-1">+4 Marks</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
            <span className="text-xs font-semibold text-textLight uppercase">Incorrect Answer</span>
            <div className="text-2xl font-black text-red-600 mt-1">-1 Mark</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
            <span className="text-xs font-semibold text-textLight uppercase">Total Questions</span>
            <div className="text-2xl font-black text-primary mt-1">50 MCQs / 30 Min</div>
          </div>
        </div>
      </div>

      {/* Syllabus */}
      <div className="mb-6 bg-background rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-all duration-300">
        <h3 className="md:text-xl text-lg font-bold text-textDark mb-4">
          Online Quiz – Syllabus &amp; Focus Domains
        </h3>
        <p className="text-textLight mb-4 text-xs italic">
          Theme: <span className="font-semibold not-italic text-primary">Technology for Transformation - Viksit Bharat@2047 Mission</span>
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-textLight text-sm">
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>General Knowledge &amp; Current Affairs</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Science and Technology &amp; IT Innovation</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Digital India Mission &amp; Emerging Tech</span>
            </li>
          </ul>
          <ul className="space-y-2 text-textLight text-sm">
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Indian Heritage, History, and Geography</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Sports, Literature, Art &amp; Culture</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Logical Reasoning &amp; Quantitative Aptitude</span>
            </li>
          </ul>
        </div>
        <p className="text-textLight mt-4 text-xs italic">
          Questions are tailored for Classes 11th and 12th standards.
        </p>
      </div>

      {/* Rules of Conduct */}
      <div className="mb-8 bg-background rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-all duration-300">
        <h3 className="md:text-xl text-lg font-bold text-textDark mb-4">
          Online Quiz – Rules of Conduct
        </h3>
        <ul className="space-y-3 text-textLight text-sm">
          {onlineRules.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cash Prizes Section */}
      <div className="bg-linear-to-r from-primary/10 via-gold/10 to-accent/10 rounded-2xl p-8 border border-gold/30 shadow-md">
        <h3 className="md:text-2xl text-xl font-bold text-textDark mb-2 text-center">
          Cash Prizes Worth ₹1,00,000
        </h3>
        <p className="text-center text-textLight text-sm mb-6">
          Direct Cash Awards for top performing quizzers across India
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {onlinePrizes.map((p, idx) => (
            <div
              key={idx}
              className="bg-background rounded-xl p-5 text-center shadow-md border border-gray-100"
            >
              <div className="text-2xl mb-1">
                {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
              </div>
              <p className="text-xs font-bold text-textLight uppercase tracking-wider mb-1">
                {p.category}
              </p>
              <p className="text-2xl font-black text-primary">{p.amount}</p>
              <p className="text-xs text-textLight mt-1">Total: {p.total}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-textLight text-sm mb-6">
          📜 E-Certificates will be issued to <strong>all participants</strong> • Top 3 students per school qualify for the On-Campus Grand Finale.
        </p>

        <div className="text-center">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center font-bold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #F5C518, #D4A800)", color: "#0d0920" }}
          >
            Register Now via Google Form →
          </a>
        </div>
      </div>
    </>
  );
};

export default OnlineRulesComp;
