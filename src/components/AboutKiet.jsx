const AboutKiet = () => {
  return (
    <section
      id="about-kiet"
      className="relative overflow-hidden px-6 py-16 md:py-24"
      style={{ background: "linear-gradient(180deg, #FAF8FF 0%, #ffffff 100%)" }}
    >
      {/* Decorative purple orb */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2D1B69, transparent)" }} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Organised by
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-textDark">
            <span
              className="inline-block relative"
              style={{
                background: "linear-gradient(135deg, #2D1B69 0%, #F47920 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              KIET Deemed To Be University
            </span>
          </h2>
          {/* Gold + orange divider */}
          <div className="flex items-center justify-center gap-1 mx-auto mt-3">
            <div className="h-1 w-12 rounded-full" style={{ background: "#2D1B69" }} />
            <div className="h-1 w-6 rounded-full" style={{ background: "#F5C518" }} />
            <div className="h-1 w-12 rounded-full" style={{ background: "#F47920" }} />
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          <div className="group animate-fade-in-up delay-200">
            <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
              <div className="absolute top-0 left-0 w-1 h-0 transition-all duration-500 group-hover:h-full rounded-l-2xl"
                style={{ background: "linear-gradient(180deg, #2D1B69, #F47920)" }} />
              <div className="absolute top-4 right-4 text-5xl opacity-5 font-black text-primary select-none">K</div>
              <p className="text-base md:text-lg leading-relaxed text-textLight text-justify">
                Located in Delhi-NCR, Ghaziabad,{" "}
                <span className="font-semibold text-navy">KIET Deemed To Be University</span>{" "}
                stands as a premier hub for academic excellence and holistic growth. With a legacy
                of innovation and commitment to quality education, KIET continues to nurture future
                leaders and changemakers.
              </p>
            </div>
          </div>

          <div className="group animate-fade-in-up delay-400">
            <div className="relative overflow-hidden rounded-2xl border border-accent/10 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/30">
              <div className="absolute top-0 left-0 w-1 h-0 transition-all duration-500 group-hover:h-full rounded-l-2xl"
                style={{ background: "linear-gradient(180deg, #F47920, #F5C518)" }} />
              <div className="absolute top-4 right-4 text-5xl opacity-5 font-black text-accent select-none">A+</div>
              <p className="text-base md:text-lg leading-relaxed text-textLight text-justify">
                Accredited with{" "}
                <span className="font-semibold text-accent">NAAC A+</span> and{" "}
                <span className="font-semibold text-accent">NBA</span> for all eligible programs.
                Consistently featured in reputed national rankings including{" "}
                <span className="font-semibold text-navy">NIRF 2025</span> (Pharmacy: Rank 71,
                Engineering: 151–200 Band, Innovation: 11–50 Band),{" "}
                <span className="font-semibold text-navy">QS-I-Gauge (Diamond Rating)</span> and{" "}
                ET Edge – Recognized as{" "}
                <span className="font-semibold text-navy">Best Education Brand 2025</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKiet;
