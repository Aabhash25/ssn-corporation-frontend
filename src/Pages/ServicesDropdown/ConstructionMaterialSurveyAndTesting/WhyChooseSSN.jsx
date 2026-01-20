"use client";
import React from "react";

// Google Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");
    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

const WhyChooseSSN = () => {
  return (
    <>
      <FontsStyle />
      <section className="relative w-full pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-500 font-playfair">
              Why Choose Our Materials Testing Laboratory?
            </span>
            {/* Optional ribbon/divider */}
            {/* <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 rounded-full mx-auto mt-4"></div> */}
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
                      Industry standard testing procedures
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-roboto">
                      All tests are performed following ASTM, AASHTO, and local
                      regulatory standards, ensuring reliable and accurate
                      results for every project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      Experienced certified laboratory technicians and engineers
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-roboto">
                      Our team brings certified expertise and decades of
                      combined experience to ensure trustworthy analysis and
                      interpretation of all materials tested.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      Modern testing equipment and calibrated instruments
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-roboto">
                      We use advanced, fully calibrated laboratory and field
                      equipment for precise measurement and reliable results.
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
                      Fast turnaround times and digital reporting
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-roboto">
                      Receive actionable results quickly with detailed digital
                      reports, enabling efficient decision-making on your
                      project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      Independent quality assurance and verification services
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-roboto">
                      Third-party verification ensures objectivity and
                      confidence in the accuracy of your material testing
                      results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      Integrated support with geotechnical, civil, and
                      structural engineering teams
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-roboto">
                      Our laboratory seamlessly collaborates with engineering
                      teams for comprehensive project insights and
                      decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseSSN;
