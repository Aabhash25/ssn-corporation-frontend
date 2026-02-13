"use client";

const WhySSNSection = () => {
  return (
    <section className="relative w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
            Why SSN Corporation?
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Integrated geotechnical, laboratory, and materials testing
                    services
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Comprehensive end-to-end solutions combining field
                    investigation, laboratory analysis, and material testing
                    under one roof for seamless project delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Experienced engineers and field professionals
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our team brings decades of combined experience in
                    geotechnical engineering, ensuring reliable expertise for
                    complex projects across various industries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Practical, constructible engineering solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    We focus on real-world applicability, delivering designs and
                    recommendations that are not only technically sound but also
                    practical to implement.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Commitment to safety, quality, and project success
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Safety-first approach with rigorous quality control measures
                    and dedication to exceeding client expectations on every
                    project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySSNSection;
