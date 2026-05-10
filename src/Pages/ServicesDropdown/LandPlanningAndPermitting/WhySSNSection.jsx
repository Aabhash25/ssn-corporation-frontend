"use client";

const WhySSNSection = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 font-playfair">
            Why SSN Corporation?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title:
                  "Technical expertise in land development regulations and permitting",
                description:
                  "Our team maintains deep knowledge of zoning codes, environmental regulations, and permitting requirements across multiple jurisdictions.",
              },
              {
                title:
                  "Proven process that reduces risk and improves predictability",
                description:
                  "Our systematic approach to due diligence, planning, and permitting coordination minimizes delays and unexpected costs.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title:
                  "Integrated perspective across planning, engineering, and construction",
                description:
                  "We coordinate seamlessly with design and construction teams to ensure planning decisions support buildable, cost-effective solutions.",
              },
              {
                title: "Client-focused delivery aligned with project goals",
                description:
                  "We prioritize clear communication, proactive problem-solving, and results that advance your development objectives.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySSNSection;
