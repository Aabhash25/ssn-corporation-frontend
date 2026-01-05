const AboutSection = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-5 w-48 h-48 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block mb-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase  text-blue-600 font-playfair">
                Engineering the Ground That Supports Your Project
              </span>
            </div>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                We provide comprehensive geotechnical engineering services that
                address the subsurface conditions that support your project.
                Through integrated investigation, engineering analysis, and
                construction-focused recommendations, we help manage risk,
                optimize design, and support safe, efficient project delivery
                from planning through construction.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl opacity-75 blur-sm"></div>

              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src="/geotech.webp"
                  alt="Geotechnical Engineering"
                  className="w-full h-full object-cover opacity-90"
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
