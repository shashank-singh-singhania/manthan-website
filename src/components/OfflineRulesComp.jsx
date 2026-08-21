import { offlineEligibility } from "@/data/offlineData.js";
import { offlineSchedule } from "@/data/offlineData.js";
import { offlineRules } from "@/data/offlineData.js";

const OfflineRulesComp = () => {
  return (
    <>
      <div className="mt-20">
        <h3 className="md:text-3xl text-2xl font-bold text-center mb-8 text-textDark">
          Grand Finale – On-Campus Competition
        </h3>
      </div>

      <div className="mb-4 bg-accent/5 rounded-2xl p-6 border-2 border-accent/30 text-center">
        <p className="text-textLight md:text-lg">
          The Grand Finale is{" "}
          <span className="font-semibold text-accent">by invitation only</span>{" "}
          — the top 3 best-performing students from each participating school in
          the Online Round (Class 11th &amp; 12th) will be invited to compete at
          KIET Deemed To Be University, Ghaziabad.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-4">
        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
          <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-5 flex items-center">
            Grand Finale – Eligibility
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
            Grand Finale – Rules of Conduct
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
          Grand Finale – Schedule
        </h3>
        <p className="text-textLight mb-6">
          The top 150 teams from across India will be shortlisted and invited to
          KIET Deemed To Be University for the on-campus rounds and Grand Finale.
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
          Grand Finale – Areas of Focus
        </h3>
        <p className="text-textLight mb-4">
          All questions will revolve around the central theme:{" "}
          <span className="font-semibold text-primary">
            "Viksit Bharat@2047 – Technology for Transformation"
          </span>{" "}
          and may include:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-textLight">
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>
                Digital India Mission – milestones, achievements, and future
                vision
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>Artificial Intelligence &amp; Automation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>
                Space &amp; Defence Technology – ISRO, Chandrayaan &amp;
                Gaganyaan, DRDO
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>
                Green &amp; Sustainable Technologies – renewable energy, EVs,
                smart cities
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>
                Start-up &amp; Innovation Ecosystem – Atal Innovation Mission
              </span>
            </li>
          </ul>
          <ul className="space-y-2 text-textLight">
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Cybersecurity &amp; Data Protection</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>5G, IoT, and Emerging Technologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Education &amp; Skill Development 4.0 – NEP 2020</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>Digital Governance – e-governance, fintech, Aadhaar</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">▸</span>
              <span>
                Vision 2047 – government initiatives and citizen roles
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 bg-linear-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
        <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-6 text-center">
          Grand Finale – Awards &amp; Recognition
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-background rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl mb-3">🥇🥈🥉</div>
            <h4 className="text-xl font-bold text-primary mb-2">
              Winners &amp; Runner-Ups
            </h4>
            <p className="text-textLight">
              Recognition, trophies, and exciting prizes for top performers
            </p>
          </div>
          <div className="bg-background rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl mb-3">🎓</div>
            <h4 className="text-xl font-bold text-accent mb-2">
              All Finalists
            </h4>
            <p className="text-textLight">
              Certificates of Merit for all Grand Finale participants
            </p>
          </div>
        </div>
        <p className="text-center text-textLight mt-6">
          All online participants will receive E-Certificates of Participation
        </p>
      </div>
    </>
  );
};

export default OfflineRulesComp;
