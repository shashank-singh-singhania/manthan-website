import { onlineRules, onlineEligibility, onlineStructure, onlinePrizes, scoringSystem, tieBreakerCriteria } from "@/data/onlineData.js";
import { Trophy, Clock, CheckCircle2, AlertCircle, ShieldAlert, Award, FileText } from "lucide-react";

const QUIZ_URL = "https://quiz.kiet.edu/login/index.php";

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
            Official Guidelines, Structure &amp; Evaluation Criteria
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div className="bg-background rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-all duration-300">
          <h3 className="md:text-xl text-lg font-bold text-textDark mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Eligibility &amp; Access
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

      {/* Official Evaluation Criteria Section */}
      <div className="mb-6 rounded-2xl p-6 md:p-8 border border-primary/20 shadow-lg bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-gold to-accent" />
        
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black text-textDark">
              EVALUATION CRITERIA
            </h3>
            <p className="text-xs text-textLight font-semibold">
              MANTHAN 2026 – Official Rules &amp; Scoring Guidelines
            </p>
          </div>
        </div>

        {/* 1. Overview & Structure */}
        <div className="mb-6 p-4 rounded-xl bg-surface border border-primary/10 text-xs sm:text-sm text-textLight">
          <span className="font-bold text-textDark">1. Overview &amp; Structure:</span> All participants must follow the official rules and scoring guidelines outlined below during the online competition.
        </div>

        {/* 2. Scoring System Table */}
        <div className="mb-8">
          <h4 className="text-base font-bold text-textDark mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">2</span>
            Scoring System
          </h4>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary/5 text-textDark border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-bold">Particular</th>
                  <th className="py-3 px-4 font-bold">Details</th>
                  <th className="py-3 px-4 font-bold text-center">Marks Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-green-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-textDark">Correct Answer</td>
                  <td className="py-3.5 px-4 text-textLight">+4 marks for every correct answer</td>
                  <td className="py-3.5 px-4 text-center font-black text-green-600">+4</td>
                </tr>
                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-textDark">Incorrect Answer</td>
                  <td className="py-3.5 px-4 text-textLight">−1 mark for every incorrect answer (negative marking)</td>
                  <td className="py-3.5 px-4 text-center font-black text-red-600">−1</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-textDark">Unattempted Question</td>
                  <td className="py-3.5 px-4 text-textLight">0 marks (no penalty)</td>
                  <td className="py-3.5 px-4 text-center font-bold text-gray-500">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Tie-Breaker Rules */}
        <div>
          <h4 className="text-base font-bold text-textDark mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center font-bold">3</span>
            Tie-Breaker Rules
          </h4>
          <p className="text-xs sm:text-sm text-textLight mb-4">
            In the case of a <strong>Tie</strong> between two or more participants, the final rankings will be determined using the following criteria, listed <strong>in order of priority</strong>:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 relative">
              <span className="absolute top-2.5 right-3 text-xs font-black text-primary/40 uppercase">Priority 1</span>
              <p className="font-bold text-primary text-sm mb-1">Total Marks</p>
              <p className="text-xs text-textLight leading-relaxed">
                The participant with the <strong>Highest overall score/marks</strong> wins.
              </p>
            </div>

            <div className="bg-accent/5 rounded-xl p-4 border border-accent/20 relative">
              <span className="absolute top-2.5 right-3 text-xs font-black text-accent/40 uppercase">Priority 2</span>
              <p className="font-bold text-accent text-sm mb-1">Least Negative Marks</p>
              <p className="text-xs text-textLight leading-relaxed">
                The participant with fewer total <strong>Negative marks deducted</strong> wins.
              </p>
            </div>

            <div className="bg-gold/10 rounded-xl p-4 border border-gold/30 relative">
              <span className="absolute top-2.5 right-3 text-xs font-black text-gold/60 uppercase">Priority 3</span>
              <p className="font-bold text-textDark text-sm mb-1">Timing</p>
              <p className="text-xs text-textLight leading-relaxed">
                The participant with the <strong>Fastest completion time</strong> wins.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-textLight">
            <strong className="text-textDark">NOTE:</strong> The final decision regarding the evaluation and selection of winners shall rest solely with the Organising Team.
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
            href={QUIZ_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center font-bold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #F5C518, #D4A800)", color: "#0d0920" }}
          >
            Attempt Mock Quiz →
          </a>
        </div>
      </div>
    </>
  );
};

export default OnlineRulesComp;
