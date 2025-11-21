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

const StructuralEngineering = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Structural Engineering
          </h1>

          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation provides expert Structural Engineering services,
            ensuring the safety, stability, and longevity of buildings and
            infrastructure. Our engineers design and analyze structures with
            precision, integrating the latest standards and technologies to meet
            client requirements.
          </p>
        </div>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Our Services */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Our Services
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-6 mb-12 w-full">
            <p>
              <strong>Structural Design & Analysis:</strong> Develop safe and
              efficient designs for buildings, bridges, and industrial
              facilities.
            </p>
            <p>
              <strong>Load Assessment & Capacity Evaluation:</strong> Analyze
              existing structures to determine performance under loads and
              identify upgrades.
            </p>
            <p>
              <strong>Seismic & Wind Engineering:</strong> Ensure structures can
              withstand natural forces and comply with local codes.
            </p>
            <p>
              <strong>Material Selection & Optimization:</strong> Recommend
              optimal materials for strength, cost-effectiveness, and
              sustainability.
            </p>
            <p>
              <strong>Structural Inspections & Assessments:</strong> Perform
              field inspections to verify safety, detect deterioration, and
              provide corrective recommendations.
            </p>
            <p>
              <strong>Retrofit & Rehabilitation Solutions:</strong> Upgrade
              structures for enhanced performance or extended lifespan.
            </p>
            <p>
              <strong>Technical Documentation & Reports:</strong> Prepare
              detailed analysis reports, design calculations, and
              recommendations for project execution.
            </p>
          </div>

          {/* Why Choose SSN */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Why Choose SSN Corporation
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-6 mb-16 w-full">
            <p>
              <strong>Experienced Engineers:</strong> Skilled in structural
              design, analysis, and field problem-solving.
            </p>
            <p>
              <strong>Code-Compliant Solutions:</strong> Designs adhere to local
              and international building standards.
            </p>
            <p>
              <strong>Innovative Approach:</strong> Advanced tools and software
              for efficient and safe structural solutions.
            </p>
            <p>
              <strong>Risk Management:</strong> Early detection and mitigation
              of structural risks.
            </p>
            <p>
              <strong>Client-Centric:</strong> Collaborative approach to meet
              project goals and timelines.
            </p>
          </div>
        </div>

        {/* Glow Circles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default StructuralEngineering;
