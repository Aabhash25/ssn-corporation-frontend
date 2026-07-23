"use client";

const AboutSection = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute top-0 left-10 w-36 h-36 bg-yellow-100/40 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 font-playfair leading-tight">
            Building the Framework That Holds Your Vision
          </h2>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            We provide professional structural engineering services for
            buildings, transportation infrastructure, and facilities. Our
            engineers deliver practical, reliable solutions that ensure safe
            construction, long-term performance, and regulatory compliance.
          </p>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            We collaborate with owners, architects, civil engineers, and
            contractors to support projects through planning, design, and
            construction phases — ensuring every vision is built with precision
            and confidence.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Visual Image */}
        <div className="relative w-full h-80 sm:h-[32rem] rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-700">
          <img
            src="/BuildingtheFrameworkThat HoldsYourVision.webp"
            alt="Structural Engineering"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
