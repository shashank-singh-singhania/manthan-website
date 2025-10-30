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
            Rules & <span className="text-primary">Regulations</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-10"></div>

          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/60">
                <h4 className="md:text-2xl text-xl font-bold text-primary mb-2">
                  Online Quiz
                </h4>
                <p className="text-textLight mb-3">
                  Individual Competition from Anywhere
                </p>
                <div className="space-y-2 text-textLight">
                  <p>
                    <span className="font-semibold">Quiz Date:</span> 22nd &
                    23rd November 2025
                  </p>
                  <p>
                    <span className="font-semibold">Format:</span> Individual
                    participation
                  </p>
                  <p>
                    <span className="font-semibold">Eligibility:</span> Classes
                    XI & XII (All Streams)
                  </p>
                </div>
              </div>
              <div className="bg-linear-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border-2 border-accent/60">
                <h4 className="md:text-2xl text-xl font-bold text-accent mb-2">
                  Offline Quiz
                </h4>
                <p className="text-textLight mb-3">
                  On-Campus Competition at KIET, Ghaziabad
                </p>
                <div className="space-y-2 text-textLight">
                  <p>
                    <span className="font-semibold">Quiz Date:</span> 5th & 6th
                    December 2025
                  </p>
                  <p>
                    <span className="font-semibold">Format:</span> Team of 3
                    members
                  </p>
                  <p>
                    <span className="font-semibold">Eligibility:</span> Classes
                    XI & XII (Science Stream)
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
                      1st Nov 2025
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">Registration Closes</span>
                    <span className="font-semibold text-textDark">
                      20th Nov 2025
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">Quiz Date</span>
                    <span className="font-semibold text-textDark">
                      22nd-23rd Nov 2025
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-textLight">Result Declaration</span>
                    <span className="font-semibold text-textDark">
                      26th Nov 2025
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border border-accent/20">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h4 className="font-bold text-xl text-accent">
                    Offline Quiz
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">
                      Registration Deadline
                    </span>
                    <span className="font-semibold text-textDark">
                      30th Nov 2025
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-textLight">
                      Day 1 - Quarterfinal & SF1
                    </span>
                    <span className="font-semibold text-textDark">
                      5th Dec 2025
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-textLight">
                      Day 2 - SF2 & Grand Finale
                    </span>
                    <span className="font-semibold text-textDark">
                      6th Dec 2025
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
