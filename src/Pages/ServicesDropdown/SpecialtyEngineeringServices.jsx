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

const SpecialtyEngineeringServices = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Specialty Engineering
          </h1>

          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation provides a full range of specialty engineering and
            technical services supporting the planning, design, and execution of
            complex projects. Each service is delivered with a focus on quality,
            compliance, and long-term performance.
          </p>
        </div>

        {/* Services Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto space-y-12">
          {/* Pavement Design */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Pavement Design
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              SSN Corporation delivers robust pavement design solutions tailored
              to traffic demands, soil conditions, and long-term performance
              requirements. Our designs maximize durability and reduce
              maintenance costs across all pavement systems.
            </p>
          </div>

          {/* Trenchless Design Services */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Trenchless Design Services
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              We provide expert trenchless solutions including HDD,
              Microtunneling, and Pipe Jacking. Our approach minimizes surface
              disruption and ensures efficient, code-compliant underground
              utility installation.
            </p>
          </div>

          {/* Traffic Engineering Services */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Traffic Engineering Services
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              Our traffic engineering solutions enhance safety, mobility, and
              roadway performance, offering traffic impact studies, signal
              designs, signage plans, and traffic control plans.
            </p>
          </div>

          {/* MEP Services */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              MEP Services
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              From concept to commissioning, our Mechanical, Electrical, and
              Plumbing designs support energy-efficient, coordinated, and
              code-compliant building systems.
            </p>
          </div>

          {/* Special Inspections */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Special Inspections & Field Support
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              SSN provides certified inspections for structural components,
              fireproofing, steel, concrete, and anchorage systems—ensuring full
              compliance with project specifications and building codes.
            </p>
          </div>

          {/* 3D Modeling */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              3D Modeling & Rendering
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              We create detailed 3D models and photorealistic renderings to
              support design visualization, conflict detection, and presentation
              needs.
            </p>
          </div>

          {/* BIM Modeling */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              BIM Modeling
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              Our BIM services integrate architectural, structural, and MEP
              systems into a unified model for improved coordination and
              construction efficiency.
            </p>
          </div>

          {/* Specialty Structural Design */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Specialty Structural Design
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              We design retaining walls, shoring systems, tiebacks, bracing,
              crane foundations, lifting plans, and other specialty structural
              components requiring advanced engineering analysis.
            </p>
          </div>

          {/* Instrumentation Engineering */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Instrumentation Engineering
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              We provide vibration monitoring, displacement measurement, load
              monitoring, and geotechnical instrumentation systems to ensure
              safety and verify design assumptions.
            </p>
          </div>

          {/* ⭐ NEW — Stormwater Impact & Erosion Control Analysis */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Stormwater Impact & Erosion Control Analysis
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              SSN Corporation performs detailed stormwater impact assessments
              and erosion control analyses to ensure compliance with
              environmental regulations and protect infrastructure. We evaluate
              runoff patterns, soil loss risks, sediment transport, and develop
              effective mitigation measures such as silt barriers, sediment
              basins, and slope protection systems.
            </p>
          </div>

          {/* ⭐ NEW — Hydrology & Drainage Study */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Hydrology & Drainage Study
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              Our hydrology and drainage studies analyze watershed behavior,
              rainfall events, peak flows, and drainage system capacity. We
              design sustainable drainage solutions including culverts,
              channels, storm sewers, detention/retention systems, ensuring
              effective stormwater conveyance and flood mitigation.
            </p>
          </div>
        </div>

        {/* Decorative Glows */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-orange-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default SpecialtyEngineeringServices;
