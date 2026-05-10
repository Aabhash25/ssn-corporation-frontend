"use client";

const AboutSection = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      <div className="relative max-w-[90rem] mx-auto">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-5 w-36 h-36 bg-blue-200/40 rounded-full blur-3xl animate-pulse z-0" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-200/40 rounded-full blur-3xl animate-pulse z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="block mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 font-playfair leading-tight">
              Engineering the Ground That Supports Your Project
            </h2>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4">
              We provide comprehensive geotechnical engineering services that
              address the subsurface conditions supporting your project. Our
              integrated investigations, engineering analysis, and
              construction-focused recommendations help manage risk, optimize
              design, and ensure safe, efficient project delivery from planning
              through construction.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Partnering closely with owners, architects, and contractors, we
              deliver practical solutions that align with your project goals
              while maintaining high standards of safety, reliability, and
              performance.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
              <img
                src="/geotech.webp"
                alt="Geotechnical Engineering"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
