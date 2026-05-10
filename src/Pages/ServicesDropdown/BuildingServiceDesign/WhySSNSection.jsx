const WhySSNSection = () => {
  return (
    <section className="relative w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 bg-white">
      {" "}
      <div className="w-full max-w-[90rem] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-500 font-playfair">
            Why SSN Corporation?
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* Left Column */}
          <div className="space-y-8">
            {[
              {
                title: "Multidisciplinary Expertise Under One Roof",
                desc: "SSN Corporation offers integrated engineering and design capabilities across multiple disciplines, including building systems, life safety, and construction services. This unified expertise allows for better coordination, fewer design conflicts, and more efficient project delivery from concept through completion.",
              },
              {
                title: "Code-Driven, Compliance-Focused Design",
                desc: "Our team maintains deep knowledge of building codes, regulatory requirements, and industry standards. Every design is developed with compliance in mind, helping our clients navigate approvals, reduce risk, and ensure long-term safety and performance.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-1 h-20 sm:h-24 lg:h-28 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {[
              {
                title: "Practical, Constructible Engineering Solutions",
                desc: "We design with real-world construction in mind. By focusing on constructability, cost efficiency, and clarity in documentation, we help minimize change orders, reduce delays, and support smoother execution in the field.",
              },
              {
                title: "Client-Centered Collaboration & Reliability",
                desc: "We prioritize strong communication and collaboration with clients, architects, contractors, and stakeholders. Our responsive approach, attention to detail, and commitment to quality ensure dependable outcomes and long-term partnerships.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-1 h-20 sm:h-24 lg:h-28 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {card.desc}
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
