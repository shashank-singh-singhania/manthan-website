const AboutKiet = () => {
  return (
    <section id="about-kiet" className="md:py-22 py-10 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-textDark">
            About{" "}
            <span className="text-primary">KIET Group of Institutions</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="md:text-xl text-lg text-textLight leading-relaxed text-justify mb-6">
            KIET Group of Institutions, located in Ghaziabad, Delhi NCR, is a
            premier educational institution committed to excellence in education
            and holistic development. With a legacy of nurturing talent and
            fostering innovation, KIET has established itself as a cornerstone
            of quality education in the region.
          </p>
          <p className="md:text-xl text-lg text-textLight leading-relaxed text-justify ">
            The Department of PR and International Relations at KIET organizes
            Manthan to foster critical thinking and create platforms for
            students nationwide to showcase their intellect and talents. Through
            initiatives like Manthan, KIET continues to contribute to
            nation-building by empowering young minds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutKiet;
