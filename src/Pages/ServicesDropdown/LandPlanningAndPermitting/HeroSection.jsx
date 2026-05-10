const HeroSection = () => {
  return (
    <section className="relative w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden bg-amber-50">
      <img
        src="/geotech-hero.jpg"
        alt="Land Planning And Permitting Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
        <div className="space-y-4">
          <div className="inline-block"></div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-playfair drop-shadow-lg">
            <span className="text-yellow-400">Land Planning &</span>
            <br />
            <span className="text-yellow-400 drop-shadow-md">
              Permitting Services
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
