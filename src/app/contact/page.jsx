import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contacts from "@/data/contacts.js";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      <section className="py-30 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 leading-tight">
              Contact{" "}
              <span className="text-accent relative inline-block group">
                Us
              </span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4 transition-all duration-500 hover:w-32"></div>
            <p className="text-textLight max-w-2xl mx-auto mb-10">
              Get in touch with our coordinators for any queries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 pt-10">
            <div className="bg-linear-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary/30 animate-fade-in-up delay-200 group relative overflow-hidden">
              <div className="flex items-center justify-center gap-3 mb-6 relative z-10">
                <h3 className="md:text-2xl text-xl font-bold text-primary">
                  Student Coordinators
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                {contacts.students.map((person, idx) => (
                  <div
                    key={idx}
                    className="flex bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/30 group/card"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover/card:bg-accent/20 group-hover/card:scale-110">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex flex-col text-left">
                      <p className="font-semibold text-gray-800 mb-1 group-hover/card:text-primary transition-colors duration-200">
                        {person.name}
                      </p>
                      <p className="text-gray-500 ">{person.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-accent/30 animate-fade-in-up delay-400 group relative overflow-hidden">
              <div className="flex items-center justify-center gap-3 mb-6 relative z-10">
                <h3 className="md:text-2xl text-xl font-bold text-accent">
                  Faculty Coordinators
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                {contacts.faculty.map((person, idx) => (
                  <div
                    key={idx}
                    className="flex items-center bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-accent/30 group/card"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover/card:bg-primary/20 group-hover/card:scale-110">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-800 mb-1 group-hover/card:text-accent transition-colors duration-200">
                        {person.name}
                      </p>
                      <p className="text-gray-500 ">{person.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-20"></div>
      <Footer />
    </div>
  );
};

export default Contact;
