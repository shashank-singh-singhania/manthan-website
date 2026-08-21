import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contacts from "@/data/contacts.js";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #FAF8FF 0%, #ffffff 100%)" }}>
      <Header />
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: "#2D1B69", transform: "translate(-40%, -40%)" }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: "#F47920", transform: "translate(40%, 40%)" }} />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="animate-fade-in-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Get in Touch
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight text-textDark">
              Contact{" "}
              <span style={{
                background: "linear-gradient(135deg, #2D1B69, #F47920)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Us
              </span>
            </h2>
            <div className="flex items-center justify-center gap-1 mx-auto mb-3">
              <div className="h-1 w-12 rounded-full" style={{ background: "#2D1B69" }} />
              <div className="h-1 w-6 rounded-full" style={{ background: "#F5C518" }} />
              <div className="h-1 w-12 rounded-full" style={{ background: "#F47920" }} />
            </div>
            <p className="text-textLight max-w-xl mx-auto mb-12">
              Reach out to our coordinators for any queries about Manthan 2026
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Student Coordinators */}
            <div className="rounded-3xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-fade-in-up delay-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, #2D1B69, #7C4DFF)" }} />
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 pointer-events-none"
                style={{ background: "#2D1B69" }} />
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center justify-center gap-2">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #2D1B69, #4527A0)" }}>S</span>
                Student Coordinators
              </h3>
              <div className="space-y-4">
                {contacts.students.map((person, idx) => (
                  <div key={idx}
                    className="flex items-center bg-surface p-4 rounded-xl border border-primary/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group/card">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0"
                      style={{ background: "linear-gradient(135deg, rgba(45,27,105,0.1), rgba(69,39,160,0.15))" }}>
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-textDark text-sm mb-0.5 group-hover/card:text-primary transition-colors">
                        {person.name}
                      </p>
                      <a href={`tel:${person.phone}`}
                        className="text-textLight text-sm hover:text-primary transition-colors">
                        {person.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Faculty Coordinators */}
            <div className="rounded-3xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-fade-in-up delay-400 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, #F47920, #F5C518)" }} />
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 pointer-events-none"
                style={{ background: "#F47920" }} />
              <h3 className="text-xl font-bold text-accent mb-6 flex items-center justify-center gap-2">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #F47920, #FF9A45)" }}>F</span>
                Faculty Coordinators
              </h3>
              <div className="space-y-4">
                {contacts.faculty.map((person, idx) => (
                  <div key={idx}
                    className="flex items-center bg-surface p-4 rounded-xl border border-accent/10 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 group/card">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0"
                      style={{ background: "linear-gradient(135deg, rgba(244,121,32,0.1), rgba(255,154,69,0.15))" }}>
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-textDark text-sm mb-0.5 group-hover/card:text-accent transition-colors">
                        {person.name}
                      </p>
                      <a href={`tel:${person.phone}`}
                        className="text-textLight text-sm hover:text-accent transition-colors">
                        {person.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Email & Location Row */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up delay-600">
            <div className="rounded-2xl p-6 border border-gold/20 bg-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4"
              style={{ background: "linear-gradient(135deg, rgba(245,197,24,0.05), rgba(244,121,32,0.05))" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #F5C518, #D4A800)" }}>
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-textLight font-semibold uppercase tracking-wider mb-1">Email Us</p>
                <a href={`mailto:${contacts.email}`}
                  className="font-bold text-primary hover:text-accent transition-colors duration-200 text-sm">
                  {contacts.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-6 border border-primary/10 bg-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #2D1B69, #4527A0)" }}>
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-textLight font-semibold uppercase tracking-wider mb-1">Venue</p>
                <p className="font-bold text-primary text-sm">
                  KIET Deemed To Be University
                </p>
                <p className="text-textLight text-xs">Delhi-NCR, Ghaziabad, UP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
