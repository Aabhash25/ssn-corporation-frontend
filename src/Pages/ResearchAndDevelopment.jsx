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
    <div className="w-full min-h-screen pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10 text-gray-900">
        {/* Page Header */}
        <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-6 text-center">
          Research & Development
        </h1>
        <p className="text-lg sm:text-xl font-roboto mb-12 leading-relaxed text-center">
          Our R&D team is dedicated to building AI-driven solutions for quantity
          take-off, cost estimation, and efficient construction planning. We
          harness computer vision, deep learning, and automation to deliver
          faster, more accurate, and cost-efficient projects.
        </p>

        {/* Two-column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
              AI-Powered Quantity Take-Off And Cost Estimation
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                  <FaBrain className="text-blue-600 text-lg" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pt-1 font-roboto">
                  Our AI-enabled product automatically analyzes 2D building
                  plans to extract elements and generate accurate quantity
                  takeoffs.
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                  <FaRocket className="text-green-600 text-lg" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pt-1 font-roboto">
                  It reduces manual effort, minimizes errors, and speeds up
                  project planning.
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                  <FaChartLine className="text-purple-600 text-lg" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pt-1 font-roboto">
                  By integrating real-time cost data, we provide precise
                  material and cost estimates, empowering construction teams to
                  make informed decisions.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/quantity-takeoff"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-blue-600 text-white rounded-lg font-roboto font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
              >
                <span>Visit Quantity Takeoff</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="/ai.png"
                alt="AI analyzing construction blueprints in our R&D lab"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-3 rounded-lg text-gray-800 font-roboto shadow-md">
                AI-powered blueprint analysis
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-0">
          {[
            { number: "95%", label: "Accuracy Rate" },
            { number: "10x", label: "Faster Processing" },
            { number: "50%", label: "Cost Reduction" },
            { number: "24/7", label: "AI Analysis" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`text-3xl lg:text-4xl font-playfair font-bold text-gray-900 transition-all duration-300 ${
                  hoveredCard === index ? "scale-110" : ""
                }`}
              >
                {stat.number}
              </div>
              <div className="text-gray-600 font-roboto font-medium mt-2">
                {stat.label}
              </div>
            </div>
          ))}
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
