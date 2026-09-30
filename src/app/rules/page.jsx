import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OnlineRulesComp from "@/components/OnlineRulesComp";
import OfflineRulesComp from "@/components/OfflineRulesComp";
import { Calendar, Trophy, Zap, Clock } from "lucide-react";

const Rules = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-26 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Official Guidelines
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-3 mb-2 text-center leading-tight">
              Rules &amp; <span className="text-accent">Regulations</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4"></div>
            <p className="text-textLight text-sm sm:text-base max-w-2xl mx-auto">
              Everything you need to know about participating in Manthan 2026 National Inter-School Quiz Competition.
            </p>
          </div>

          {/* Primary Top Cards: Online Quiz Spotlight + Offline Qualifier note */}
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Online Quiz Card - Spans 2 cols */}
              <div className="md:col-span-2 bg-linear-to-br from-primary/10 via-gold/5 to-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/60 shadow-lg relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h4 className="md:text-2xl text-xl font-black text-primary">
                    National Online Quiz (Primary Focus)
                  </h4>
                  <span className="text-xs font-bold px-3 py-1 bg-gold/20 text-navy border border-gold/40 rounded-full">
                    3rd October 2026
                  </span>
                </div>
                <p className="text-textLight text-sm mb-4">
                  Individual Online Quiz for Class 11th &amp; 12th students from anywhere across India
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-textLight text-sm">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-textDark">Mock Test:</span> 1st – 2nd Oct 2026
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-textDark">Quiz Date:</span> 3rd October 2026
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-textDark">Format:</span> 50 MCQs in 30 Minutes
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-textDark">Marking Scheme:</span> +4 for Correct, -1 for Incorrect
                  </p>
                  <p className="flex items-center gap-2 sm:col-span-2">
                    <span className="font-semibold text-textDark">Eligibility:</span> Exclusively Classes 11th &amp; 12th (All Streams)
                  </p>
                </div>
              </div>

              {/* Offline Grand Finale Qualifier Card */}
              <div className="bg-linear-to-br from-accent/10 to-accent/5 rounded-2xl p-6 md:p-8 border-2 border-accent/40 shadow-md flex flex-col justify-between">
                <div>
                  <h4 className="md:text-xl text-lg font-bold text-accent mb-2">
                    Offline Grand Finale
                  </h4>
                  <p className="text-textLight text-xs mb-3">
                    On-Campus Final Round at KIET Campus, Ghaziabad
                  </p>
                  <div className="space-y-2 text-textLight text-xs">
                    <p>
                      <span className="font-semibold text-textDark">Date:</span> Mid-October 2026 (Tentative)
                    </p>
                    <p>
                      <span className="font-semibold text-textDark">Eligibility:</span> Top 3 qualifiers per school
                    </p>
                    <p>
                      <span className="font-semibold text-textDark">Hospitality:</span> Food &amp; stay provided
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-accent/20 text-xs text-accent font-bold">
                  ★ Entry by Online Quiz Qualification Only
                </div>
              </div>
            </div>
          </div>

          <OnlineRulesComp />

          {/* Important Dates Table */}
          <div className="mt-16">
            <h3 className="md:text-2xl text-xl font-bold text-textDark mb-6 text-center">
              Important Dates Schedule
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Online Quiz Timeline */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h4 className="font-bold text-xl text-primary">
                    Online Quiz Timeline
                  </h4>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-textLight">Registration Status</span>
                    <span className="font-bold text-green-600">Now Open (Free)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-textLight">Online Mock Test</span>
                    <span className="font-bold text-accent">1st – 2nd October 2026</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-textLight">National Online Quiz Date</span>
                    <span className="font-extrabold text-primary text-base">3rd October 2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-textLight">E-Certificates Issued</span>
                    <span className="font-semibold text-textDark">For All Participants</span>
                  </div>
                </div>
              </div>

              {/* Grand Finale Timeline */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-accent/20">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-accent" />
                  <h4 className="font-bold text-xl text-accent">
                    Grand Finale (On-Campus)
                  </h4>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-textLight">Eligible Students</span>
                    <span className="font-semibold text-textDark">Classes 11th &amp; 12th</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-textLight">Qualification Criteria</span>
                    <span className="font-semibold text-textDark">Top 3 Per School</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-textLight">Venue</span>
                    <span className="font-semibold text-textDark">KIET Campus, Ghaziabad</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-textLight">Finale Event Dates</span>
                    <span className="font-bold text-accent text-base">Mid-October 2026 (Tentative)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Offline Rules Component placed at the end */}
          <OfflineRulesComp />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Rules;
