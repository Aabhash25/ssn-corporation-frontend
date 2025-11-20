"use client";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";

const ResearchAndDevelopment = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="w-full min-h-screen pt-42 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-gray-900">
            Research And Development
          </h1>
        </div>

        {/* Two-column Layout */}
        <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-12 lg:gap-16 items-center mb-20 px-4">
          {/* Left Column */}
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 leading-tight">
              AI-Powered Quantity TakeOff And Cost Estimation
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaBrain className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 text-base leading-relaxed font-roboto">
                    Our AI-enabled Quantity Takeoff(QTO) product automatically
                    analyzes 2D building plans to extract elements and generate
                    accurate quantity takeoffs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaRocket className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 text-base leading-relaxed font-roboto">
                    It reduces manual effort by 75 to 95%, minimizes errors,and
                    accelerates project planning time-line.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaChartLine className="text-purple-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 text-base leading-relaxed font-roboto">
                    It Integrated real-time cost data to provide material
                    estimates and empower data-driven decision making.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://qtakeoff.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-roboto font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span>Visit Quantity Takeoff</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - Full Image */}
          <div className="relative order-1 lg:order-2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 w-full max-w-[900px] mx-auto">
              <img
                src="/research.webp"
                alt="AI analyzing construction blueprints in our R&D lab"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl text-gray-800 font-roboto font-medium shadow-lg">
                AI-powered blueprint analysis
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mx-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Proven Results
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto font-roboto">
              Our AI solutions deliver measurable improvements across key
              performance indicators
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "95%",
                label: "Accuracy Rate",
                icon: FaChartLine,
                color: "text-green-600",
              },
              {
                number: "10x",
                label: "Faster Processing",
                icon: FaRocket,
                color: "text-blue-600",
              },
              {
                number: "50%",
                label: "Cost Reduction",
                icon: FaBrain,
                color: "text-purple-600",
              },
              {
                number: "24/7",
                label: "AI Analysis",
                icon: FaLightbulb,
                color: "text-orange-600",
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`text-2xl ${stat.color}`} />
                    </div>
                  </div>
                  <div
                    className={`text-2xl lg:text-3xl font-playfair font-bold text-gray-900 transition-all duration-300 ${
                      hoveredCard === index ? "scale-110" : ""
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-roboto font-medium mt-2">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap");
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default ResearchAndDevelopment;
