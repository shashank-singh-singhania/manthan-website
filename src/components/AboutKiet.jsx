const AboutKiet = () => {
  return (
    <section
      id="about-kiet"
      className="relative overflow-hidden bg-white px-6 py-10 md:py-20 bg-linear-to-br"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-textDark">
            About{" "}
            <span className="text-primary inline-block relative">
              KIET Group of Institutions
            </span>
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary rounded-full transition-all duration-500 hover:w-36" />
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="group animate-fade-in-up delay-200">
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-0 bg-linear-to-b from-primary to-accent transition-all duration-500 group-hover:h-full" />
              <p className="text-lg md:text-xl leading-relaxed text-textLight text-justify">
                KIET Group of Institutions, located in Ghaziabad (Delhi NCR),
                stands as a premier hub of learning known for academic
                excellence and holistic growth. With a legacy of innovation and
                commitment to quality education, KIET continues to nurture
                future leaders and changemakers.
              </p>
            </div>
          </div>

          <div className="group animate-fade-in-up delay-400">
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-0 bg-linear-to-b from-accent to-primary transition-all duration-500 group-hover:h-full" />
              <p className="text-lg md:text-xl leading-relaxed text-textLight text-justify">
                The Department of PR and International Relations at KIET
                organizes{" "}
                <span className="font-semibold text-primary">Manthan</span> — a
                national initiative that inspires critical thinking and provides
                students across India a platform to showcase their intellect and
                creativity, driving KIET’s mission of empowering young minds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKiet;
