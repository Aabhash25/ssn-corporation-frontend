const HeroSection = () => {
  return (
    <section className="relative w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden bg-amber-50">
      <img
        src="/geotech-hero.jpg"
        alt="Geotechnical Engineering Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
        <div className="space-y-4">
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full bg-yellow-100/80 border border-yellow-400/60 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-medium text-yellow-800">
                Professional Engineering Services
              </span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-playfair text-white drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-400">
              Geotechnical Engineering
            </span>
            <br />
            <span className="text-xl sm:text-2xl text-white drop-shadow-md">
              and Material Testing Services
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
