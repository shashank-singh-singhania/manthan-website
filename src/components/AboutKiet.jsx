const AboutKiet = () => {
  return (
    <section
      id="about-kiet"
      className="relative overflow-hidden bg-white px-6 py-10 md:py-20 bg-linear-to-br"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-1 text-textDark">
            About{" "}
            <span className="text-accent inline-block relative">
              KIET Group of Institutions
            </span>
          </h2>

          <p className="text-sm md:text-xl text-gray-800 mt-1 mb-3 italic">
            (Deemed-to-be University)
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="group animate-fade-in-up delay-200">
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-0 bg-linear-to-b from-primary to-accent transition-all duration-500 group-hover:h-full" />
              <p className="text-lg md:text-xl leading-relaxed text-textLight text-justify">
                Located in Delhi-NCR, Ghaziabad, KIET Group of Institutions
                (Deemed-to-be University) stands as a premier hub for academic
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
                The Deemed-to-be University is accredited with NAAC A+ and NBA
                for all eligible programs. It has consistently featured in
                reputed national and international rankings, including NIRF 2025
                (Pharmacy: Rank 71, Engineering: 151–200 Rank Band, Innovation:
                11–50 Rank Band), QS-I- Gauge (Diamond Rating) and ET Edge (The
                Times Group) – Recognized as Best Education Brand 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKiet;
