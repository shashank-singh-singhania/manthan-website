"use client";

import { useState, useMemo } from "react";
import {
  Trophy,
  Award,
  Medal,
  Search,
  Sparkles,
  MapPin,
  GraduationCap,
  School,
  Gift,
  CheckCircle2,
  Table as TableIcon,
  LayoutGrid,
  Info,
  PartyPopper,
} from "lucide-react";
import { winnersData } from "@/data/winnersData";

const WinnersShowcase = () => {
  const [selectedTier, setSelectedTier] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "table"

  const { summary, tiers } = winnersData;

  // Flatten all students with their tier info
  const allStudents = useMemo(() => {
    return tiers.flatMap((tier) =>
      tier.students.map((student) => ({
        ...student,
        tierId: tier.id,
        tierTitle: tier.title,
        tierBadge: tier.badge,
        tierTheme: tier.theme,
      }))
    );
  }, [tiers]);

  // Filter students by tier and search query
  const filteredStudents = useMemo(() => {
    return allStudents.filter((student) => {
      const matchesTier = selectedTier === "all" || student.tierId === selectedTier;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        student.name.toLowerCase().includes(q) ||
        student.school.toLowerCase().includes(q) ||
        student.city.toLowerCase().includes(q) ||
        student.class.toLowerCase().includes(q) ||
        student.position.toLowerCase().includes(q);
      return matchesTier && matchesSearch;
    });
  }, [allStudents, selectedTier, searchQuery]);

  // Helper for rank badge styling
  const getRankBadge = (theme, rank, medal) => {
    if (theme === "gold") {
      return {
        bg: "bg-amber-400/20 text-amber-300 border-amber-400/40",
        border: "border-amber-400/30",
        cardBg: "from-amber-500/10 via-purple-900/40 to-indigo-950/60",
        pill: "bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950",
        icon: <Trophy className="w-4 h-4 text-amber-400" />,
        shadow: "shadow-amber-500/10",
      };
    }
    if (theme === "silver") {
      return {
        bg: "bg-slate-300/20 text-slate-200 border-slate-300/40",
        border: "border-slate-300/30",
        cardBg: "from-slate-400/10 via-purple-900/30 to-indigo-950/50",
        pill: "bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950",
        icon: <Medal className="w-4 h-4 text-slate-200" />,
        shadow: "shadow-slate-300/10",
      };
    }
    return {
      bg: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      border: "border-orange-500/30",
      cardBg: "from-orange-500/10 via-purple-900/30 to-indigo-950/50",
      pill: "bg-gradient-to-r from-orange-400 to-amber-600 text-slate-950",
      icon: <Award className="w-4 h-4 text-orange-400" />,
      shadow: "shadow-orange-500/10",
    };
  };

  return (
    <section
      id="winners"
      className="py-16 md:py-24 px-4 relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(175deg, #0d0920 0%, #160f33 50%, #20134a 100%)",
      }}
    >
      {/* Background glow & accents */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #F5C518 0%, #F47920 60%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Badge */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30 shadow-lg">
            <PartyPopper className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>OFFICIAL RESULTS DECLARED • 3RD OCTOBER 2026</span>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
            Hall of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518 0%, #FFE066 40%, #F47920 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fame
            </span>{" "}
            🏆
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
            {summary.description}
          </p>
        </div>

        {/* Prize Pool Spotlight Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div
            className="rounded-2xl p-5 border border-amber-400/30 relative overflow-hidden flex items-center gap-4"
            style={{
              background: "linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(244,121,32,0.06) 100%)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="text-xs font-semibold text-amber-300/80 uppercase tracking-wider">
                Total Cash Prize
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {summary.totalPrizePool}
              </div>
              <div className="text-xs text-white/60">Distributed across 15 positions</div>
            </div>
          </div>

          <div
            className="rounded-2xl p-5 border border-white/10 relative overflow-hidden flex items-center gap-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                Prize Breakdown
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                5 × ₹10,000 <span className="text-white/50">•</span> 5 × ₹6,000 <span className="text-white/50">•</span> 5 × ₹4,000
              </div>
              <div className="text-xs text-white/60 mt-0.5">Winners • Runner Ups • 2nd Runner Ups</div>
            </div>
          </div>

          <div
            className="rounded-2xl p-5 border border-orange-500/30 relative overflow-hidden flex items-center gap-4"
            style={{
              background: "linear-gradient(135deg, rgba(244,121,32,0.12) 0%, rgba(45,27,105,0.2) 100%)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6 text-orange-300" />
            </div>
            <div>
              <div className="text-xs font-semibold text-orange-300 uppercase tracking-wider">
                Recognition
              </div>
              <div className="text-base font-bold text-white">E-Certificates & Trophies</div>
              <div className="text-xs text-white/60">Sent to winners & participating schools</div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-white/5 border border-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-md">
          {/* Tier Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedTier("all")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedTier === "all"
                  ? "bg-amber-400 text-slate-950 shadow-md font-bold"
                  : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              All Winners ({allStudents.length})
            </button>
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedTier === tier.id
                    ? "bg-white/20 text-white border border-white/30 shadow-md font-bold"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{tier.badge}</span>
                <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-black/30 text-white/90">
                  {tier.students.length}
                </span>
              </button>
            ))}
          </div>

          {/* Search + View Mode */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search student, school, city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-black/30 border border-white/15 rounded-xl text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400/60 transition-colors"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-black/40 border border-white/15 rounded-xl p-1 shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                title="Grid View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "grid" ? "bg-white/20 text-white" : "text-white/50 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                title="Table View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "table" ? "bg-white/20 text-white" : "text-white/50 hover:text-white"
                }`}
              >
                <TableIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Container */}
        {filteredStudents.length === 0 ? (
          <div className="text-center py-16 bg-white/5 border border-white/10 rounded-2xl">
            <Search className="w-10 h-10 text-white/30 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Results Found</h3>
            <p className="text-sm text-white/60">
              No participant matched &quot;{searchQuery}&quot;. Try clearing the search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTier("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* ================= GRID VIEW ================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => {
              const styles = getRankBadge(student.tierTheme, student.rank);
              return (
                <div
                  key={`${student.name}-${student.rank}`}
                  className={`relative rounded-3xl p-6 border ${styles.border} bg-gradient-to-br ${styles.cardBg} backdrop-blur-xl shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden`}
                >
                  <div>
                    {/* Top Header: Rank, Position & Prize */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-black/40 border border-white/15 flex items-center justify-center font-black text-sm text-white shadow-inner">
                          #{student.rank}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${styles.bg}`}
                        >
                          {styles.icon}
                          {student.position}
                        </span>
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-black shadow-md ${styles.pill}`}>
                        {student.prize}
                      </span>
                    </div>

                    {/* Student Photo & Identity Spotlight */}
                    <div className="flex items-center gap-4 mb-4">
                      {/* Photo Container */}
                      <div className="relative shrink-0">
                        <div
                          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 ${styles.border} shadow-xl group-hover:scale-105 transition-transform duration-300 bg-slate-900/60 relative`}
                        >
                          <img
                            src={student.image}
                            alt={`${student.name} - Manthan 2026 Winner`}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-950 border border-white/20 flex items-center justify-center text-xs shadow-md">
                          {student.tierTheme === "gold" ? "🥇" : student.tierTheme === "silver" ? "🥈" : "🥉"}
                        </div>
                      </div>

                      {/* Name & Quick Metadata */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors leading-tight mb-1 truncate">
                          {student.name}
                        </h3>
                        <div className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-0.5 rounded-lg border border-white/10 text-xs font-semibold text-amber-300 mb-1">
                          <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                          <span>Class {student.class}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-white/70 font-medium truncate">
                          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate">{student.city}</span>
                        </div>
                      </div>
                    </div>

                    {/* School Name */}
                    <div className="flex items-start gap-2 text-white/80 text-xs sm:text-sm bg-black/25 p-3 rounded-xl border border-white/10 mb-4 leading-snug">
                      <School className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                      <span className="font-medium line-clamp-2">{student.school}</span>
                    </div>
                  </div>

                  {/* Card Bottom Status */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" /> National Position Holder
                    </span>
                    <span className="font-semibold text-white/80">{student.prize} Cash Award</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ================= TABLE VIEW ================= */
          <div className="overflow-x-auto rounded-2xl border border-white/15 bg-black/30 backdrop-blur-xl shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm text-white/80">
              <thead className="bg-white/10 uppercase tracking-wider text-[11px] font-bold text-white border-b border-white/15">
                <tr>
                  <th className="px-4 py-3.5 text-center">Rank</th>
                  <th className="px-4 py-3.5">Photo</th>
                  <th className="px-5 py-3.5">Student Name</th>
                  <th className="px-5 py-3.5">School</th>
                  <th className="px-4 py-3.5">City</th>
                  <th className="px-4 py-3.5 text-center">Class</th>
                  <th className="px-4 py-3.5 text-center">Position</th>
                  <th className="px-5 py-3.5 text-right">Cash Prize</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredStudents.map((student) => {
                  const styles = getRankBadge(student.tierTheme, student.rank);
                  return (
                    <tr
                      key={`${student.name}-${student.rank}`}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-4 py-4 text-center font-bold text-white">
                        #{student.rank}
                      </td>
                      <td className="px-4 py-3">
                        <div className="w-11 h-11 rounded-xl overflow-hidden border border-white/20 shadow-md bg-slate-900 shrink-0">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      </td>
                      <td className="px-5 py-4 font-black text-white text-sm sm:text-base whitespace-nowrap">
                        {student.name}
                      </td>
                      <td className="px-5 py-4 text-white/80 max-w-xs">{student.school}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-white/70">
                        {student.city}
                      </td>
                      <td className="px-4 py-4 text-center whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white font-medium text-xs">
                          {student.class}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${styles.bg}`}
                        >
                          {student.position}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right whitespace-nowrap font-black text-amber-300">
                        {student.prize}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Information & Next Steps Note */}
        <div
          className="mt-12 rounded-2xl p-6 sm:p-8 border border-white/15 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(45,27,105,0.4) 0%, rgba(26,15,61,0.6) 100%)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Prize Disbursement &amp; Certificate Information
              </h4>
              <p className="text-xs sm:text-sm text-white/70">
                Official communication for all 15 position holders of Manthan 2026.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-white/80 pt-2">
            <div className="flex items-start gap-2 bg-white/5 p-3.5 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Cash Prize Disbursal:</strong> The organizing committee is contacting the winners and respective school authorities directly for prize distribution formalities.
              </span>
            </div>
            <div className="flex items-start gap-2 bg-white/5 p-3.5 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Official E-Certificates:</strong> Verified certificates of achievement and participation are being dispatched to registered email addresses.
              </span>
            </div>
            <div className="flex items-start gap-2 bg-white/5 p-3.5 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>On-Campus Grand Finale:</strong> The top 3 qualifying students from each participating school will be invited to the Grand Finale at KIET Campus.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnersShowcase;
