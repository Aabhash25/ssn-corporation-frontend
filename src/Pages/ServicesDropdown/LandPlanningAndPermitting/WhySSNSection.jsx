const WhySSNSection = () => {
  return (
    <section className="relative w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
            Why SSN Corporation?
          </span>
          {/* Optional divider */}
          {/* <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mt-4"></div> */}
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
                    Technical expertise in land development regulations and permitting
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our team maintains deep knowledge of zoning codes, environmental regulations, and permitting requirements across multiple jurisdictions.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Proven process that reduces risk and improves predictability
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our systematic approach to due diligence, planning, and permitting coordination minimizes delays and unexpected costs.
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
                    Integrated perspective across planning, engineering, and construction
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    We coordinate seamlessly with design and construction teams to ensure planning decisions support buildable, cost-effective solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Client-focused delivery aligned with project goals
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    We prioritize clear communication, proactive problem-solving, and results that advance your development objectives.
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