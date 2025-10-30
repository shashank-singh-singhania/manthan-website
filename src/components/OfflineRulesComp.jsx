import { offlineEligibility } from "@/data/offlineData.js";
import { offlineSchedule } from "@/data/offlineData.js";
import { offlineRules } from "@/data/offlineData.js";

const OfflineRulesComp = () => {
  return (
    <>
      <div className="mt-20">
        <h3 className="md:text-3xl text-2xl font-bold text-center mb-8 text-textDark">
          Offline Quiz Competition
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-4">
        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
          <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-5 flex items-center">
            Offline Quiz - Eligibility
          </h3>
          <ul className="space-y-3 text-textLight">
            {offlineEligibility.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
          <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-5 flex items-center">
            Offline Quiz - Rules of Conduct
          </h3>
          <ul className="space-y-3 text-textLight">
            {offlineRules.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
        <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-6 flex items-center">
          Offline Quiz - Competition Format
        </h3>
        <p className="text-textLight mb-6">
          Approximately 150 teams will be invited to the campus for the offline
          quiz.
        </p>
        <div className="space-y-6">
          {offlineSchedule.map((day, idx) => (
            <div
              key={day.title}
              className={`border-l-4 ${
                idx === 0 ? "border-primary" : "border-accent"
              } pl-6`}
            >
              <h4 className="font-semibold text-lg text-textDark mb-2">
                {day.title}
              </h4>
              <ul className="space-y-2 text-textLight">
                {day.items.map((it, i) => (
                  <li key={i}>{`• ${it}`}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
        <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-6">
          Offline Quiz - Areas of Focus
        </h3>
        <p className="text-textLight mb-4">
          All questions will revolve around the central theme and may include:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-textLight">
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>
                Digital India Mission - milestones, achievements, and future
                vision
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>Artificial Intelligence & Automation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>
                Space & Defence Technology - ISRO, Chandrayaan & Gaganyaan, DRDO
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>
                Green & Sustainable Technologies - renewable energy, EVs, smart
                cities
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>
                Start-up & Innovation Ecosystem - Atal Innovation Mission
              </span>
            </li>
          </ul>
          <ul className="space-y-2 text-textLight">
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Cybersecurity & Data Protection</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>5G, IoT, and Emerging Technologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Education & Skill Development 4.0 - NEP 2020</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Digital Governance - e-governance, fintech, Aadhaar</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>
                Vision 2047 - government initiatives and citizen roles
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 bg-linear-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
        <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-6 text-center">
          Offline Quiz - Awards & Recognition
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl mb-3">🥇</div>
            <h4 className="text-xl font-bold text-primary mb-2">First Prize</h4>
            <p className="text-3xl font-bold text-textDark">₹11,000</p>
          </div>
          <div className="bg-background rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl mb-3">🥈</div>
            <h4 className="text-xl font-bold text-accent mb-2">Second Prize</h4>
            <p className="text-3xl font-bold text-textDark">₹7,000</p>
          </div>
          <div className="bg-background rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl mb-3">🎖️</div>
            <h4 className="text-xl font-bold text-primary mb-2">
              Specially-abled Students
            </h4>
            <p className="text-3xl font-bold text-textDark">₹5,000</p>
          </div>
        </div>
        <p className="text-center text-textLight mt-6">
          All finalists will receive Certificates of Merit • All participants
          will receive Certificates of Participation
        </p>
      </div>
    </>
  );
};

export default OfflineRulesComp;
