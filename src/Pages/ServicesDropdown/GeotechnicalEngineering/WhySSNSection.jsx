const WhySSNSection = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
        <div className="inline-block mb-4">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase  text-blue-600 font-playfair">
              WHY SSN CORPORATION ?
            </span>
          </div>
          {/* <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-8"></div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    Integrated geotechnical, laboratory, and materials testing
                    services
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    Experienced engineers and field professionals
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team brings decades of combined experience in
                    geotechnical engineering, ensuring reliable expertise for
                    complex projects across various industries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    Practical, constructible engineering solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    Commitment to safety, quality, and project success
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Safety first approach with rigorous quality control measures
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
