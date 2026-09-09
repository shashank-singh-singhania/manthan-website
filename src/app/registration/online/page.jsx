"use client";
import { ArrowRight, ExternalLink, Trophy, Calendar, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const REGISTRATION_URL = "https://forms.gle/dXjc1KYHgcrW1z9d7";

export default function OnlineRegister() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #FAF8FF 0%, #ffffff 100%)" }}>
      <Header />
      <section className="py-30 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1 rounded-full border border-accent/20">
              National Online Quiz
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-3 mb-2 leading-tight text-textDark">
              Online <span className="text-accent">Registration</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-primary/20 p-8 sm:p-10 animate-fade-in-up delay-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-gold to-accent" />
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-textDark mb-2">
              Register for Manthan 2026
            </h3>
            <p className="text-textLight text-sm mb-6">
              Registration is open for students of <strong>Classes 11th &amp; 12th</strong> (all streams). Complete your free registration via our official Google Form.
            </p>

            <div className="bg-surface rounded-2xl p-5 mb-8 text-left space-y-2.5 border border-primary/10 text-xs sm:text-sm">
              <p className="text-textLight flex justify-between">
                <span className="font-semibold text-textDark">Eligibility:</span>{" "}
                <span>Classes 11th &amp; 12th (Any Stream)</span>
              </p>
              <p className="text-textLight flex justify-between">
                <span className="font-semibold text-textDark">Mode:</span>{" "}
                <span>Online (Individual)</span>
              </p>
              <p className="text-textLight flex justify-between">
                <span className="font-semibold text-textDark">Registration Deadline:</span>{" "}
                <span className="font-bold text-accent">26th September 2026</span>
              </p>
              <p className="text-textLight flex justify-between">
                <span className="font-semibold text-textDark">Online Mock Test:</span>{" "}
                <span>29th – 30th September 2026</span>
              </p>
              <p className="text-textLight flex justify-between">
                <span className="font-semibold text-textDark">National Quiz Date:</span>{" "}
                <span className="font-bold text-primary">3rd October 2026</span>
              </p>
              <p className="text-textLight flex justify-between">
                <span className="font-semibold text-textDark">Format:</span>{" "}
                <span>45 MCQs in 30 Minutes (+3 / -1)</span>
              </p>
              <p className="text-textLight flex justify-between">
                <span className="font-semibold text-textDark">Cash Prizes:</span>{" "}
                <span className="font-bold text-green-700">₹1,00,000 Total Pool</span>
              </p>
              <p className="text-textLight flex justify-between">
                <span className="font-semibold text-textDark">Certificates:</span>{" "}
                <span>E-Certificates for All Participants</span>
              </p>
            </div>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group/btn text-base shadow-lg glow-gold hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #F5C518 0%, #D4A800 100%)", color: "#0d0920" }}
            >
              Register Now on Google Form (Free)
              <ExternalLink className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </a>

            <p className="text-xs text-textLight mt-4">
              You will be redirected to the secure official Google Form to complete your registration.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
