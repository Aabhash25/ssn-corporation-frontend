const AboutSection = () => {
  return (
    <section className="relative w-full pt-4 pb-8 sm:pt-6 sm:pb-12 px-2 sm:px-4 lg:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="relative w-full max-w-[90rem] mx-auto">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-5 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl animate-pulse z-0" />
        <div className="absolute bottom-24 right-5 w-48 h-48 bg-yellow-200/40 rounded-full blur-3xl animate-pulse z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="block mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
              Specialized Engineering Solutions for Complex Infrastructure
            </span>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              We offer a comprehensive suite of specialty engineering services
              that fit complex infrastructure, land development, commercial, and
              institutional projects. Leveraging multidisciplinary expertise,
              advanced analytical tools, and industry best practices, our team
              delivers solutions that are code-compliant, constructible, and
              optimized for performance.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <img
                  src="/SpecialtyAbout.webp"
                  alt="Geotechnical Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
