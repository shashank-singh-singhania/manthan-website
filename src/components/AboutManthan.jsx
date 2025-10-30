import {
  Music,
  Palette,
  Leaf,
  Cpu,
  History,
  Trophy,
  Newspaper,
  Award,
  Users,
} from "lucide-react";

const AboutManthan = () => {
  const categories = [
    { word: "Music", desc: "Melodies & Rhythms", icon: Music },
    { word: "Art", desc: "Creative Expressions", icon: Palette },
    { word: "Nature", desc: "Environment & Wildlife", icon: Leaf },
    { word: "Technology", desc: "Innovation & Science", icon: Cpu },
    { word: "History", desc: "Past & Heritage", icon: History },
    { word: "Achievements", desc: "Milestones & Records", icon: Trophy },
    { word: "News", desc: "Current Affairs", icon: Newspaper },
  ];

  const onlinePrizes = [
    { position: "1st", amount: "₹5,000" },
    { position: "2nd", amount: "₹5,000" },
    { position: "3rd", amount: "₹5,000" },
    { position: "4th", amount: "₹4,000" },
    { position: "5th", amount: "₹4,000" },
    { position: "6th", amount: "₹4,000" },
    { position: "7th", amount: "₹2,000" },
    { position: "8th", amount: "₹2,000" },
    { position: "9th", amount: "₹2,000" },
    { position: "10th", amount: "₹2,000" },
  ];

  const finalePrizes = [
    { position: "1st Prize", amount: "₹11,000" },
    { position: "2nd Prize", amount: "₹7,000" },
    { position: "1st Prize (Special Students)", amount: "₹5,000" },
  ];

  return (
    <section id="about-manthan" className="py-20 px-4 font-inter min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className={`text-2xl md:text-4xl font-extrabold mb-3 leading-tight`}
          >
            About <span className="text-primary">MANTHAN 3.0</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="mb-12 bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <p className="text-xl font-semibold text-textDark mb-3 italic">
            "War and Diplomacy: Crafting Nations Towards Peace"
          </p>
          <p className="text-textLight leading-relaxed mb-4">
            This year's theme celebrates India's technological and social
            evolution as it strides toward becoming a developed nation. The
            event challenges young minds to explore how emerging technologies,
            digital inclusion, and sustainable innovation can accelerate
            progress toward the 2047 vision.
          </p>
          <p className="text-textLight leading-relaxed mb-1">
            Organized by the Department of PR and International Relations at
            KIET Group of Institutions, Manthan is an inter-school nationwide
            quiz competition that fosters critical thinking, sharpens intellect,
            and fuels the spirit of healthy competition among schools across the
            country.
          </p>
          <p className="text-textLight leading-relaxed">
            After the resounding success of its previous two editions in 2022
            and 2023, Manthan returns this year with its much-awaited 3rd
            edition, celebrating a grandeur amalgamation of knowledge,
            creativity, and curiosity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-md border border-primary/20 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-primary">The Vision</h3>
            </div>
            <p className="text-textLight leading-relaxed">
              Manthan is not just a competition—it is a movement that aims to
              empower students with confidence, broaden their horizons, and
              prepare them to shine on national and global platforms. By
              fostering curiosity and a quest for knowledge, it instills the
              belief that learning is a lifelong journey.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-accent/20 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-accent">Quiz Master</h3>
            </div>
            <p className="text-textLight leading-relaxed mb-3">
              <span className="font-semibold text-textDark">
                Mr. Gautam Bose
              </span>
              , Event Manager and CEO of Greycells
            </p>
            <p className="text-textLight leading-relaxed">
              Renowned for his unmatched energy and vast experience, Mr. Bose
              has made Manthan a memorable intellectual fest for participants
              and audiences alike.
            </p>
          </div>
        </div>

        <div className="mb-12 bg-accent/5 rounded-2xl p-8 border border-accent/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-3">
              Domains of Discovery
            </h3>
            <p className="text-textLight text-lg">
              Seven diverse domains designed around the acronym MANTHAN
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 max-w-7xl">
              {categories.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 text-center border border-primary/20 shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-[120px] flex flex-col justify-center"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-base text-primary mb-1">
                      {item.word}
                    </div>
                    <div className="text-xs text-textLight italic">
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8 pt-10">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-accent" />
            <h3 className="text-3xl font-bold text-primary mb-2">
              Prizes Worth ₹1 Lakh
            </h3>
            <p className="text-textLight">
              Every participant receives a certificate of participation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h4 className="text-2xl font-bold mb-6 text-primary text-center">
                Online Quiz Winners
              </h4>
              <div className="space-y-3">
                {onlinePrizes.map((prize, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 rounded-lg 
                        bg-gray-50 border border-gray-200"
                  >
                    <span className="font-semibold text-textDark">
                      {prize.position} Prize
                    </span>
                    <span className="font-bold text-lg text-primary">
                      {prize.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h4 className="text-2xl font-bold mb-6 text-accent text-center">
                Grand Finale (On-Campus)
              </h4>
              <div className="space-y-4">
                {finalePrizes.map((prize, idx) => (
                  <div
                    key={idx}
                    className="bg-primary/5 border border-primary/20 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-textDark">
                        {prize.position}
                      </span>
                      <span className="font-bold text-2xl text-primary">
                        {prize.amount}
                      </span>
                    </div>
                    {prize.position.includes("Special") && (
                      <p className="text-sm text-textLight mt-2 italic">
                        For specially-abled students
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center bg-primary/5 rounded-xl p-10 mt-15 border border-primary/20">
                <h3 className="text-3xl font-bold mb-4">
                  Join Us at Manthan 3.0
                </h3>
                <p className="text-lg text-textLight mb-6 max-w-3xl mx-auto">
                  Be a part of an unforgettable knowledge festival where
                  intellect meets inspiration. Challenge yourself, expand your
                  horizons, and shine on the national stage!
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="bg-white px-5 py-2 rounded-full border border-primary/30 text-textLight">
                    Critical Thinking
                  </span>
                  <span className="bg-white px-5 py-2 rounded-full border border-primary/30 text-textLight">
                    Analytical Skills
                  </span>
                  <span className="bg-white px-5 py-2 rounded-full border border-primary/30 text-textLight">
                    Teamwork
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManthan;
