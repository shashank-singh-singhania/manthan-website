import { onlinePrizes } from "@/data/onlineData.js";
import { onlineRules } from "@/data/onlineData.js";
import { onlineEligibility } from "@/data/onlineData.js";
import { onlineStructure } from "@/data/onlineData.js";

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
            Online Quiz - Eligibility
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
            Online Quiz - Structure
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
          Online Quiz - Syllabus
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-textLight">
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>General Knowledge & Current Affairs</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Logical Reasoning & Analytical Ability</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Science and Technology</span>
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
              <span>Basic Aptitude & General Awareness</span>
            </li>
          </ul>
        </div>
        <p className="text-textLight mt-4 text-sm italic">
          Questions will be of a level suitable for Classes XI and XII students
        </p>
      </div>

      <div className="mb-10 bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
        <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-6">
          Online Quiz - Rules of Conduct
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
          Online Quiz - Prize Distribution
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {onlinePrizes.map((p, idx) => (
            <div
              key={p.position + idx}
              className="bg-background rounded-xl p-4 text-center shadow-md"
            >
              <div className="text-2xl mb-2">
                {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "🎖️"}
              </div>
              <p className="text-sm font-semibold text-textDark mb-1">
                {p.position}
              </p>
              <p className="text-xl font-bold text-primary">{p.amount}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-textLight mt-6">
          Top 3 performers will receive E-certificates, prizes & recognition •
          All participants will receive Certificates of Participation
        </p>
      </div>
    </>
  );
};

export default OnlineRulesComp;
