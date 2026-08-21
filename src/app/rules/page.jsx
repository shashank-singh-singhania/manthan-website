import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OnlineRulesComp from "@/components/OnlineRulesComp";
import OfflineRulesComp from "@/components/OfflineRulesComp";
import { Calendar } from "lucide-react";

const Rules = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-26 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 text-center leading-tight">
            Rules &amp; <span className="text-accent">Regulations</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-10"></div>

          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/60">
                <h4 className="md:text-2xl text-xl font-bold text-primary mb-2">
                  Online Quiz
                </h4>
                <p className="text-textLight mb-3">
                  Individual Competition – From Anywhere in India
                </p>
                <div className="space-y-2 text-textLight">
                  <p>
                    <span className="font-semibold">Quiz Date:</span> 13th
                    September 2026
                  </p>
                  <p>
                    <span className="font-semibold">Registration Deadline:</span>{" "}
                    6th September 2026
                  </p>
                  <p>
                    <span className="font-semibold">Format:</span> Individual
                    participation (no teams)
                  </p>
                  <p>
                    <span className="font-semibold">Eligibility:</span> Classes
                    9th to 12th (All Streams)
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> 30 Minutes
                  </p>
                  <p>
                    <span className="font-semibold">Negative Marking:</span>{" "}
                    Applicable
                  </p>
                </div>
              </div>
              <div className="bg-linear-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border-2 border-accent/60">
                <h4 className="md:text-2xl text-xl font-bold text-accent mb-2">
                  Grand Finale (On-Campus)
                </h4>
                <p className="text-textLight mb-3">
                  On-Campus Competition at KIET Deemed To Be University,
                  Ghaziabad
                </p>
                <div className="space-y-2 text-textLight">
                  <p>
                    <span className="font-semibold">Dates:</span> 30th
                    September – 1st October 2026
                  </p>
                  <p>
                    <span className="font-semibold">Eligibility:</span> Classes
                    11th &amp; 12th qualifiers only
                  </p>
                  <p>
                    <span className="font-semibold">Selection:</span> Top 3
                    students per school from Online Round
                  </p>
                  <p>
                    <span className="font-semibold">Participation:</span> By
                    Invitation Only
                  </p>
                  <p>
                    <span className="font-semibold">Approx. Students:</span>{" "}
                    ~150 invited from across India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <OnlineRulesComp />
          <OfflineRulesComp />

          <div className="mt-20">
            <h3 className="md:text-2xl text-xl font-semibold text-textDark mb-6 text-center">
              Important Dates
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-md border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h4 className="font-bold text-xl text-primary">
                    Online Quiz
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">Registration Opens</span>
                    <span className="font-semibold text-textDark">
                      Now Open
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">Registration Closes</span>
                    <span className="font-semibold text-textDark">
                      6th Sep 2026
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">Quiz Date</span>
                    <span className="font-semibold text-textDark">
                      13th Sep 2026
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-textLight">E-Certificates</span>
                    <span className="font-semibold text-textDark">
                      For All Participants
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border border-accent/20">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h4 className="font-bold text-xl text-accent">
                    Grand Finale
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">Eligible Classes</span>
                    <span className="font-semibold text-textDark">
                      11th &amp; 12th
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">Selection Basis</span>
                    <span className="font-semibold text-textDark">
                      Top 3 per school
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">Day 1</span>
                    <span className="font-semibold text-textDark">
                      30th Sep 2026
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-textLight">Day 2 – Grand Finale</span>
                    <span className="font-semibold text-textDark">
                      1st Oct 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Rules;
