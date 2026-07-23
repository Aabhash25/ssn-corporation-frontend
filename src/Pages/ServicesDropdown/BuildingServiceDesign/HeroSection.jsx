const HeroSection = () => {
  return (
    <section className="relative w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden bg-white">
      <img
        src="/geotech-hero.webp"
        alt="Building Systems Design Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
      <div className="relative z-10 text-center sm:text-left px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-yellow-400 drop-shadow-lg leading-tight">
          Building & Building Systems <br />
          Design Services
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
