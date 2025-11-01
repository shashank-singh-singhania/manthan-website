const AboutKiet = () => {
  return (
    <section
      id="about-kiet"
      className="md:py-20 py-10 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-textDark">
            About{" "}
            <span className="text-primary relative inline-block group">
              KIET Group of Institutions
            </span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full transform transition-all duration-500 hover:w-32"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="group animate-fade-in-up delay-200">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-linear-to-b from-primary via-primary to-accent transition-all duration-500 group-hover:h-full"></div>
              <p className="md:text-xl text-lg text-textLight leading-relaxed text-justify">
                KIET Group of Institutions, located in Ghaziabad, Delhi NCR, is
                a premier educational institution committed to excellence in
                education and holistic development. With a legacy of nurturing
                talent and fostering innovation, KIET has established itself as
                a cornerstone of quality education in the region.
              </p>
            </div>
          </div>

          <div className="group animate-fade-in-up delay-400">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-linear-to-b from-accent via-accent to-primary transition-all duration-500 group-hover:h-full"></div>
              <p className="md:text-xl text-lg text-textLight leading-relaxed text-justify">
                The Department of PR and International Relations at KIET
                organizes Manthan to foster critical thinking and create
                platforms for students nationwide to showcase their intellect
                and talents. Through initiatives like Manthan, KIET continues to
                contribute to nation-building by empowering young minds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKiet;
