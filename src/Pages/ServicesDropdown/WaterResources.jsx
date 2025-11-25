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

const WaterResources = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Water Resources
          </h1>

          {/* Animated Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 animate-pulse"></div>
          </div>

          {/* Intro */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            Sustainable, innovative and data-driven solutions supporting
            communities, infrastructure, and environmental resilience.
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
              Hydraulics, Hydrology and Drainage Studies
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Comprehensive modeling, watershed evaluations, and performance
              forecasting that ensure safe and efficient water movement across
              natural and built environments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
              Stormwater Management Planning and Design
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Advanced stormwater systems designed to meet regulatory standards
              while mitigating flooding, erosion, and ecological disruption.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
              Green Infrastructure Design
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Nature-based solutions including bioswales, permeable pavements,
              rain gardens, and ecological buffers to enhance water quality and
              sustainability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
              Roadway and Site Drainage Design
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Efficient drainage systems for transportation corridors and land
              developments, ensuring long-term safety, compliance, and
              structural protection.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
              Floodplain Evaluation
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Detailed assessments of flood risks, regulatory compliance, and
              mitigation strategies tailored for resilient community planning.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
              Wetland Studies
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Environmental evaluation, delineation, permitting, and mitigation
              planning that protect sensitive wetland ecosystems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
              Hydrological and Hydraulic Analysis
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Precision modeling and analysis that support engineering decisions
              for dams, bridges, culverts, waterways, and stormwater systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
              NPDES Permitting Services
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Regulatory compliance services across NC, SC, GA, VA, MD, PA, NJ,
              and NY ensuring that projects meet federal and state environmental
              standards.
            </p>
          </div>
        </div>

        {/* Decorative Glow Circles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default WaterResources;
