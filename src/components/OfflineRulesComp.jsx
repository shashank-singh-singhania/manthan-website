import { offlineEligibility } from "@/data/offlineData.js";
import { offlineSchedule } from "@/data/offlineData.js";
import { offlineRules } from "@/data/offlineData.js";
import { Building2, Users, Trophy } from "lucide-react";

const OfflineRulesComp = () => {
  return (
    <div className="mt-20 pt-10 border-t border-gray-200">
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
          Qualifier Stage
        </span>
        <h3 className="md:text-3xl text-2xl font-black text-center mt-3 text-textDark">
          On-Campus Grand Finale (Offline Round)
        </h3>
        <p className="text-textLight text-sm mt-1">
          Held around <strong className="text-primary">Mid-October 2026 (Tentative)</strong> at KIET Campus, Ghaziabad
        </p>
      </div>

      <div className="mb-8 bg-accent/5 rounded-2xl p-6 border-2 border-accent/30 text-center">
        <p className="text-textLight md:text-base leading-relaxed">
          The Grand Finale is <strong className="text-accent">by qualification only</strong>. The{" "}
          <strong className="text-textDark">3 best-performing students from each participating school</strong> in the National Online Round (Class 11th &amp; 12th) will be officially invited to compete on-campus at KIET Deemed To Be University.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div className="bg-background rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-all duration-300">
          <h3 className="md:text-xl text-lg font-bold text-textDark mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Finale Eligibility
          </h3>
          <ul className="space-y-3 text-textLight text-sm">
            {offlineEligibility.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-all duration-300">
          <h3 className="md:text-xl text-lg font-bold text-textDark mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-accent" />
            Finale Guidelines
          </h3>
          <ul className="space-y-3 text-textLight text-sm">
            {offlineRules.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-1.5 mr-3 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-background rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-all duration-300">
        <h3 className="md:text-xl text-lg font-bold text-textDark mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-gold" />
          Grand Finale Schedule &amp; Experience
        </h3>
        <p className="text-textLight text-sm mb-4">
          Shortlisted school finalist teams will experience live buzzer rounds, interactive multimedia stages, and national recognition.
        </p>
        <div className="space-y-4">
          {offlineSchedule.map((day, idx) => (
            <div
              key={idx}
              className="border-l-4 border-primary pl-4 py-1"
            >
              <h4 className="font-bold text-sm text-textDark mb-2">
                {day.title}
              </h4>
              <ul className="space-y-1.5 text-textLight text-xs sm:text-sm">
                {day.items.map((it, i) => (
                  <li key={i}>{`• ${it}`}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfflineRulesComp;
