"use client";
import { ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const REGISTRATION_URL = "https://forms.gle/dXjc1KYHgcrW1z9d7";

export default function OnlineRegister() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-30 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 leading-tight">
              Online{" "}
              <span className="text-accent">Registration</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-10"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-primary/20 p-10 animate-fade-in-up delay-200">
            <div className="text-6xl mb-6">📝</div>
            <h3 className="text-2xl font-bold text-textDark mb-4">
              Register for Manthan 2026
            </h3>
            <p className="text-textLight mb-2">
              Registration is done via an official Google Form.
            </p>
            <p className="text-textLight mb-8">
              Click the button below to fill in your details and complete your
              registration.
            </p>

            <div className="bg-primary/5 rounded-xl p-5 mb-8 text-left space-y-2 border border-primary/10">
              <p className="text-sm text-textLight">
                <span className="font-semibold text-textDark">Classes:</span>{" "}
                9th to 12th
              </p>
              <p className="text-sm text-textLight">
                <span className="font-semibold text-textDark">Mode:</span>{" "}
                Individual (no teams)
              </p>
              <p className="text-sm text-textLight">
                <span className="font-semibold text-textDark">
                  Quiz Date:
                </span>{" "}
                13th September 2026
              </p>
              <p className="text-sm text-textLight">
                <span className="font-semibold text-textDark">
                  Registration Deadline:
                </span>{" "}
                6th September 2026
              </p>
              <p className="text-sm text-textLight">
                <span className="font-semibold text-textDark">
                  E-Certificate:
                </span>{" "}
                For all participants
              </p>
            </div>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group/btn text-base shadow-md hover:shadow-lg"
            >
              Register Now on Google Form
              <ExternalLink className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </a>

            <p className="text-xs text-textLight mt-4">
              You will be redirected to Google Forms to complete your
              registration.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
