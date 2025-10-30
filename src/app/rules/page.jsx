import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
          <p className="text-center text-2xl font-semibold text-textDark mb-16 max-w-3xl mx-auto">
            Theme - Viksit Bharat@2047: Technology for Transformation
          </p>

          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/60">
                <h4 className="text-2xl font-bold text-primary mb-2">
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
                <h4 className="text-2xl font-bold text-accent mb-2">
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

          <div className="mt-16 mb-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-textDark">
              Online Quiz Competition
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-textDark mb-5">
                Online Quiz - Eligibility
              </h3>
              <ul className="space-y-3 text-textLight">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Students currently enrolled in Class XI or XII (any stream:
                    Science, Commerce, or Humanities)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Each participant must register individually through
                    manthan.kiet.edu
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Must have valid school ID, Aadhar card, and High School
                    Certificate for verification
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Registration: 1st - 20th November 2025</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-textDark mb-5">
                Online Quiz - Structure
              </h3>
              <ul className="space-y-3 text-textLight">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Total Questions: 30 MCQs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Duration: 20 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Marking: +1 for correct answer, No negative marking
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Quiz will auto-submit when timer runs out</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Scores generated automatically upon submission</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4 bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-textDark mb-6">
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
              Questions will be of a level suitable for Classes XI and XII
              students
            </p>
          </div>

          <div className="mb-10 bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-textDark mb-6">
              Online Quiz - Rules of Conduct
            </h3>
            <ul className="space-y-3 text-textLight">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>
                  Each participant must attempt the quiz individually without
                  external help (books, internet, or peers)
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>
                  Switching browser tabs or minimizing the quiz window during
                  the test may lead to disqualification
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>
                  Any form of malpractice or impersonation will result in
                  immediate disqualification
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>
                  The decision of the organizing committee will be final and
                  binding
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>
                  In case of a tie, the participant who completed the quiz in
                  the shortest time will be ranked higher
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-linear-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-textDark mb-6 text-center">
              Online Quiz - Prize Distribution
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-background rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl mb-2">🥇</div>
                <p className="text-sm font-semibold text-textDark mb-1">
                  1st Prize
                </p>
                <p className="text-xl font-bold text-primary">₹5,000</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl mb-2">🥈</div>
                <p className="text-sm font-semibold text-textDark mb-1">
                  2nd Prize
                </p>
                <p className="text-xl font-bold text-primary">₹5,000</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl mb-2">🥉</div>
                <p className="text-sm font-semibold text-textDark mb-1">
                  3rd Prize
                </p>
                <p className="text-xl font-bold text-primary">₹5,000</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl mb-2">🎖️</div>
                <p className="text-sm font-semibold text-textDark mb-1">
                  4th-6th
                </p>
                <p className="text-xl font-bold text-primary">₹4,000</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl mb-2">🎖️</div>
                <p className="text-sm font-semibold text-textDark mb-1">
                  7th-10th
                </p>
                <p className="text-xl font-bold text-primary">₹2,000</p>
              </div>
            </div>
            <p className="text-center text-textLight mt-6">
              Top 3 performers will receive E-certificates, prizes & recognition
              • All participants will receive Certificates of Participation
            </p>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-8 text-textDark">
              Offline Quiz Competition
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-textDark mb-5 flex items-center">
                Offline Quiz - Eligibility
              </h3>
              <ul className="space-y-3 text-textLight">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Open to students of Classes XI and XII from Science stream
                    only (PCM/PCB/PCMB)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Every team must comprise exactly 3 members</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Team participants can be from the same school or different
                    schools
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>A school may send a maximum of two teams</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    All participants must carry a valid school ID card on the
                    day of the event
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Registration deadline: 30th November 2025</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-textDark mb-5 flex items-center">
                Offline Quiz - Rules of Conduct
              </h3>
              <ul className="space-y-3 text-textLight">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Teams must report to the venue at least 30 minutes before
                    scheduled time
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    The quizmaster's decision regarding results, scoring, or
                    disputes will be final and binding
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Use of mobile phones, calculators, or any electronic devices
                    during the quiz is strictly prohibited
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Any form of malpractice or indiscipline will lead to
                    immediate disqualification
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    Replacement of team members after registration is not
                    allowed
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>
                    College provides food and accommodation on prior information
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-textDark mb-6 flex items-center">
              Offline Quiz - Competition Format
            </h3>
            <p className="text-textLight mb-6">
              Approximately 150 teams will be invited to the campus for the
              offline quiz.
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-lg text-textDark mb-2">
                  Day 1 - 5th December 2025
                </h4>
                <ul className="space-y-2 text-textLight">
                  <li>
                    • Offline registration at 9:00 AM at KIET Group of
                    Institutions
                  </li>
                  <li>
                    • Quarterfinal (Written Format) - Top 12 teams selected from
                    all participating teams
                  </li>
                  <li>
                    • The 12 teams will be divided into two groups of 6 teams
                    each for Semi Final 1 and Semi Final 2
                  </li>
                  <li>
                    • Semi Final 1 with 6 teams - Top 3 advance to Grand Finale
                  </li>
                  <li>
                    • Teams not qualifying for semi-finals are expected to stay
                    till 4:00 PM to cheer the semi-finalists
                  </li>
                  <li>
                    • Teams selected for Semi Final 2 may return to schools or
                    stay to cheer fellow semi-finalists
                  </li>
                  <li>• Participation certificates will be shared</li>
                </ul>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-semibold text-lg text-textDark mb-2">
                  Day 2 - 6th December 2025
                </h4>
                <ul className="space-y-2 text-textLight">
                  <li>
                    • All teams (Semi Final 2 participants and qualifying
                    finalists from Semi Final 1) report at 9:00 AM
                  </li>
                  <li>
                    • Semi Final 2 with remaining 6 teams - Top 3 advance to
                    Grand Finale
                  </li>
                  <li>
                    • Grand Finale with 6 finalist teams (3 from each
                    semi-final)
                  </li>
                  <li>• Winner and Runner-Up announced</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-textDark mb-6">
              Offline Quiz - Areas of Focus
            </h3>
            <p className="text-textLight mb-4">
              All questions will revolve around the central theme and may
              include:
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
                    Space & Defence Technology - ISRO, Chandrayaan & Gaganyaan,
                    DRDO
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span>
                    Green & Sustainable Technologies - renewable energy, EVs,
                    smart cities
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
                  <span>
                    Digital Governance - e-governance, fintech, Aadhaar
                  </span>
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
            <h3 className="text-2xl font-semibold text-textDark mb-6 text-center">
              Offline Quiz - Awards & Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🥇</div>
                <h4 className="text-xl font-bold text-primary mb-2">
                  First Prize
                </h4>
                <p className="text-3xl font-bold text-textDark">₹11,000</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🥈</div>
                <h4 className="text-xl font-bold text-accent mb-2">
                  Second Prize
                </h4>
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
              All finalists will receive Certificates of Merit • All
              participants will receive Certificates of Participation
            </p>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-textDark mb-6 text-center">
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
