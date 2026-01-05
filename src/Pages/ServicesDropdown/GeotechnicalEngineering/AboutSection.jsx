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
              <span className="text-lg font-semibold uppercase tracking-widest text-green-600">
                Engineering ther Ground That Supports Your Project
              </span>
            </div>{" "}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                We provide comprehensive geotechnical engineering services that
                address the subsurface conditions that support your project.
                Through integrated investigation, engineering analysis, and
                construction-focused recommendations, we help manage risk,
                optimize design, and support safe, efficient project delivery
                from planning through construction.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Risk Management
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Design Optimization
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Safety First
                  </span>
                </div>
              </div>
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

                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span className="text-white font-semibold text-sm">
                        Advanced Technology
                      </span>
                    </div>

                    <h3 className="text-white text-xl lg:text-2xl font-bold font-playfair leading-tight">
                      Precision Engineering
                    </h3>

                    <p className="text-gray-200 text-xs leading-relaxed">
                      State-of-the-art equipment and methodologies for accurate
                      subsurface analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">70+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">
                  Projects
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">10+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">
                  Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
