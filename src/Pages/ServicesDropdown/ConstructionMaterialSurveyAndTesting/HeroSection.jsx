const HeroSection = () => {
  return (
    <section className="relative w-full h-96 sm:h-104 overflow-hidden bg-amber-50">
      {/* Background Image */}
      <img
        src="/SpecialInspectionsServices(IBCChapter 17).webp"
        alt="Geotechnical Engineering Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Text at bottom */}
      <div className="absolute bottom-6 sm:bottom-10 left-20 sm:left-28 lg:left-36 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-yellow-400 drop-shadow-lg leading-tight">
          Material Testing Services
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
