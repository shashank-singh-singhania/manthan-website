import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contacts from "@/data/contacts.js";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 leading-tight">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-10"></div>

          <div className="grid md:grid-cols-2 gap-10 pt-10">
            <div className="bg-linear-to-br from-white to-gray-100 rounded-3xl p-8 shadow-lg transition-all border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Student Coordinators
              </h3>
              <div className="space-y-6">
                {contacts.students.map((person, idx) => (
                  <div
                    key={idx}
                    className="flex bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <Phone className="w-6 h-6 text-accent mr-4 shrink-0" />
                    <div className="flex flex-col">
                      <p className="font-semibold text-gray-800">
                        {person.name}
                      </p>

                      <p className="text-gray-500 justify-start">
                        {person.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-white to-gray-100 rounded-3xl p-8 shadow-lg transition-all border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Faculty Coordinators
              </h3>
              <div className="space-y-6">
                {contacts.faculty.map((person, idx) => (
                  <div
                    key={idx}
                    className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <Phone className="w-6 h-6 text-accent mr-4 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {person.name}
                      </p>
                      <p className="text-gray-500">{person.phone}</p>
                    </div>
                  </div>
                ))}
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
