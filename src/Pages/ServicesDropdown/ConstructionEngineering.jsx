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

const ConstructionEngineering = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Construction Engineering
          </h1>

          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation provides expert Construction Engineering and
            Management services to ensure projects are executed safely,
            efficiently, and in alignment with design intent. We bridge the gap
            between engineering design and field construction to enhance project
            outcomes.
          </p>
        </div>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* What We Do */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            What We Do
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-6 mb-12 w-full">
            <p>
              <strong>Construction Planning & Scheduling Support:</strong>{" "}
              Review project sequences, constructability, and schedule
              optimization to minimize delays.
            </p>
            <p>
              <strong>Structural & Civil Field Engineering:</strong> Provide
              on-site technical guidance, plan interpretation, and construction
              troubleshooting.
            </p>
            <p>
              <strong>Temporary Works & Shoring Review:</strong> Evaluate
              temporary structures, bracing, and safety measures to support
              construction activities.
            </p>
            <p>
              <strong>Quality Assurance & Control Support:</strong> Assist with
              inspections, testing coordination, and verification of materials
              and methods.
            </p>
            <p>
              <strong>Coordination with Design Teams:</strong> Ensure design
              intent is maintained while accommodating field conditions and
              contractor requirements.
            </p>
            <p>
              <strong>Technical Documentation & Reporting:</strong> Prepare
              construction guidance notes, field reports, and recommendations
              for engineering decisions.
            </p>
            <p>
              <strong>Construction Risk Mitigation:</strong> Identify potential
              issues early and propose practical solutions to reduce schedule,
              cost, and safety risks.
            </p>
          </div>

          {/* Why Choose SSN */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Why Choose SSN Corporation
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-6 mb-16 w-full">
            <p>
              <strong>Practical Field Expertise:</strong> Experienced engineers
              provide hands-on support for complex construction challenges.
            </p>
            <p>
              <strong>Integrated Approach:</strong> Collaboration with
              designers, contractors, and owners ensures smooth project
              execution.
            </p>
            <p>
              <strong>Risk Management:</strong> Early identification and
              mitigation of construction and structural risks.
            </p>
            <p>
              <strong>Quality-Focused:</strong> Support that ensures
              construction aligns with design standards and regulatory
              requirements.
            </p>
            <p>
              <strong>Responsive & Timely:</strong> On-site guidance and fast
              technical decision-making to keep projects moving.
            </p>
          </div>
        </div>

        {/* Glow Circles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-orange-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default ConstructionEngineering;
