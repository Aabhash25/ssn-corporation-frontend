const AboutSection = () => {
  return (
    <section className="relative w-full pt-2 pb-8 sm:pt-4 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-5 w-48 h-48 bg-blue-200/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <span className="block mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#242687] font-playfair">
              Engineering the Ground That Supports Your Project
            </span>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              We provide comprehensive geotechnical engineering services that
              address the subsurface conditions that support your project.
              Through integrated investigation, engineering analysis, and
              construction-focused recommendations, we help manage risk,
              optimize design, and support safe, efficient project delivery from
              planning through construction.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl opacity-75 blur-sm" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <img
                  src="/geotech.webp"
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
