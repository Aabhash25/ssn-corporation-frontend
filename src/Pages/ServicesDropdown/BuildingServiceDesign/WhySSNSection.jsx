const WhySSNSection = () => {
  return (
    <section className="relative w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="w-full max-w-[90rem] mx-auto">
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
            {/* Card 1 */}
            <div className="group flex items-start space-x-4">
              <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  Multidisciplinary Expertise Under One Roof
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  SSN Corporation offers integrated engineering and design
                  capabilities across multiple disciplines, including building
                  systems, life safety, and construction services. This unified
                  expertise allows for better coordination, fewer design
                  conflicts, and more efficient project delivery from concept
                  through completion.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex items-start space-x-4">
              <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  Code-Driven, Compliance-Focused Design
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Our team maintains deep knowledge of building codes,
                  regulatory requirements, and industry standards. Every design
                  is developed with compliance in mind, helping our clients
                  navigate approvals, reduce risk, and ensure long-term safety
                  and performance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Card 3 */}
            <div className="group flex items-start space-x-4">
              <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  Practical, Constructible Engineering Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We design with real-world construction in mind. By focusing on
                  constructability, cost efficiency, and clarity in
                  documentation, we help minimize change orders, reduce delays,
                  and support smoother execution in the field.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex items-start space-x-4">
              <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  Client-Centered Collaboration & Reliability
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We prioritize strong communication and collaboration with
                  clients, architects, contractors, and stakeholders. Our
                  responsive approach, attention to detail, and commitment to
                  quality ensure dependable outcomes and long-term partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySSNSection;
