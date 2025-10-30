const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        <div className="mb-12">
          <h2 className="md:text-4xl text-2xl font-bold text-textDark mb-4 flex items-center justify-center gap-2">
            Our Partners & Sponsors
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {[
            "https://source.unsplash.com/600x400/?tech,company",
            "https://source.unsplash.com/600x400/?startup,logo",
            "https://source.unsplash.com/600x400/?innovation,brand",
            "https://source.unsplash.com/600x400/?business,logo",
            "https://source.unsplash.com/600x400/?ai,company",
          ].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-4 border border-border flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Partner ${i + 1}`}
                className="w-full h-32 object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
