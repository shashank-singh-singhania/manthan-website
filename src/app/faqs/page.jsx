"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import faqs from "@/data/faqs";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-30 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 leading-tight text-center">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-10"></div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl border-2 transition-all duration-300 ${
                  openIndex === idx
                    ? "border-primary/50 shadow-lg"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center gap-4 p-6 text-left group"
                  aria-expanded={openIndex === idx}
                >
                  <h4 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
                    {faq.q}
                  </h4>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === idx
                        ? "bg-primary rotate-180"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors ${
                        openIndex === idx ? "text-white" : "text-gray-600"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-10"></div>
      <Footer />
    </div>
  );
};

export default Faqs;
