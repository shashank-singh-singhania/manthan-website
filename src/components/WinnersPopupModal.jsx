"use client";

import { useState, useEffect } from "react";
import { Trophy, X, Sparkles, ArrowRight, Award, Medal, Gift } from "lucide-react";

const WinnersPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("manthan_winners_popup_dismissed");
    if (!dismissed) {
      // Auto open after 900ms for high impact
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      setHasDismissed(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
    try {
      sessionStorage.setItem("manthan_winners_popup_dismissed", "true");
    } catch (e) {
      // Ignore storage errors
    }
  };

  const handleViewWinners = () => {
    handleClose();
    const el = document.getElementById("winners");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Floating Pill on bottom-right (always available if closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full shadow-2xl border border-amber-400/40 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-amber-400/30 cursor-pointer animate-bounce"
          style={{
            background: "linear-gradient(135deg, #F5C518 0%, #FFE066 50%, #F47920 100%)",
          }}
          aria-label="View Quiz Results"
        >
          <Trophy className="w-4 h-4 text-slate-950" />
          <span>🏆 Quiz Results Declared!</span>
        </button>
      )}

      {/* Main Popup Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          {/* Modal Container */}
          <div
            className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-2 border-amber-400/50 overflow-hidden animate-scale-in"
            style={{
              background: "linear-gradient(160deg, #120b2e 0%, #1d1246 60%, #2D1B69 100%)",
              boxShadow: "0 0 50px rgba(245, 197, 24, 0.25)",
            }}
          >
            {/* Top decorative glow */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-36 rounded-full blur-3xl pointer-events-none opacity-40"
              style={{ background: "radial-gradient(circle, #F5C518, #F47920)" }}
            />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>OFFICIAL RESULTS DECLARED</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">
                National Online Quiz{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #F5C518, #FFE066, #F47920)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Winners!
                </span>{" "}
                🎉
              </h2>

              <p className="text-white/80 text-xs sm:text-sm mb-5 leading-relaxed">
                Heartiest congratulations to the top 15 position holders across India sharing{" "}
                <strong className="text-amber-300 font-bold">₹1,00,000</strong> in cash prizes in the Manthan 2026 National Online Quiz!
              </p>

              {/* Prize Tiers Overview Box */}
              <div className="space-y-2 mb-6 text-left text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-amber-400/15 border border-amber-400/30">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="font-bold text-white">5 Winners</span>
                      <p className="text-[11px] text-white/60">Neil, Pratyush, Yatharth, Aradhya, Raman</p>
                    </div>
                  </div>
                  <span className="font-black text-amber-300 text-sm whitespace-nowrap">₹10,000 each</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-300/10 border border-slate-300/30">
                  <div className="flex items-center gap-2">
                    <Medal className="w-4 h-4 text-slate-200 shrink-0" />
                    <div>
                      <span className="font-bold text-white">5 Runner-Ups</span>
                      <p className="text-[11px] text-white/60">Nivriti, Sakshi, Bhoomika, Riya, Arsh</p>
                    </div>
                  </div>
                  <span className="font-black text-slate-200 text-sm whitespace-nowrap">₹6,000 each</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-orange-500/15 border border-orange-500/30">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-orange-400 shrink-0" />
                    <div>
                      <span className="font-bold text-white">5 Consolation / 2nd Runner-Ups</span>
                      <p className="text-[11px] text-white/60">Kartik, Nivyansh, Aditya, Vansh, Shreyansh</p>
                    </div>
                  </div>
                  <span className="font-black text-orange-300 text-sm whitespace-nowrap">₹4,000 each</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleViewWinners}
                  className="w-full sm:flex-1 py-3 px-6 rounded-xl font-bold text-slate-950 flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-transform cursor-pointer text-sm"
                  style={{
                    background: "linear-gradient(135deg, #F5C518 0%, #FFE066 50%, #F47920 100%)",
                  }}
                >
                  <span>View Full Hall of Fame</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl border border-white/20 hover:bg-white/10 text-white/70 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WinnersPopupModal;
