import { onlineRules } from "@/data/onlineData.js";
import { onlineEligibility } from "@/data/onlineData.js";
import { onlineStructure } from "@/data/onlineData.js";

const REGISTRATION_URL = "https://forms.gle/dXjc1KYHgcrW1z9d7";

const OnlineRulesComp = () => {
  return (
    <>
      <div className="mt-16 mb-8">
        <h3 className="md:text-3xl text-2xl font-bold text-center mb-8 text-textDark">
          Online Quiz Competition
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-4">
        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
          <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-5">
            Online Quiz – Eligibility
          </h3>
          <ul className="space-y-3 text-textLight">
            {onlineEligibility.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
          <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-5">
            Online Quiz – Structure
          </h3>
          <ul className="space-y-3 text-textLight">
            {onlineStructure.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-4 bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
        <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-6">
          Online Quiz – Syllabus
        </h3>
        <p className="text-textLight mb-4 text-sm italic">
          Theme: <span className="font-semibold not-italic text-primary">Viksit Bharat@2047 – Technology for Transformation</span>
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-textLight">
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>General Knowledge &amp; Current Affairs</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Science and Technology</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Digital India &amp; Innovation Ecosystem</span>
            </li>
          </ul>
          <ul className="space-y-2 text-textLight">
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Indian Polity, History, and Geography</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Sports, Art, and Culture</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Logical Reasoning &amp; Analytical Ability</span>
            </li>
          </ul>
        </div>
        <p className="text-textLight mt-4 text-sm italic">
          Questions will be of a level suitable for Classes 9th to 12th students
        </p>
      </div>

      <div className="mb-10 bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
        <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-6">
          Online Quiz – Rules of Conduct
        </h3>
        <ul className="space-y-3 text-textLight">
          {onlineRules.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-linear-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
        <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-6 text-center">
          Online Quiz – Prizes &amp; Recognition
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-background rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl mb-3">🏅</div>
            <h4 className="text-lg font-bold text-primary mb-2">
              Class 9th &amp; 10th – Winners
            </h4>
            <p className="text-textLight">
              Exciting Goodies &amp; Recognition
            </p>
          </div>
          <div className="bg-background rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl mb-3">🏆</div>
            <h4 className="text-lg font-bold text-accent mb-2">
              Class 11th &amp; 12th – Top Qualifiers
            </h4>
            <p className="text-textLight">
              Invited to On-Campus Grand Finale at KIET
            </p>
          </div>
        </div>
        <p className="text-center text-textLight mb-6">
          🎓 E-Certificates will be issued to <strong>all participants</strong>
        </p>
        <div className="text-center">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Register Now via Google Form →
          </a>
        </div>
      </div>
    </>
  );
};

export default OnlineRulesComp;
