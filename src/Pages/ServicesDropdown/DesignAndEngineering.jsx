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

const DesignAndEngineering = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Design and Engineering
          </h1>

          {/* Animated Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            Our Design and Engineering practice delivers creative, efficient,
            and technically sound solutions — ensuring projects are not only
            visually compelling but structurally optimized and practically
            buildable. Our Design and Engineering team is equipped to handle all
            types of projects—including buildings, infrastructure, roadways,
            facilities, educational, and industrial projects—across both
            vertical and horizontal construction sectors.
          </p>
        </div>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* What We Do */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            What We Do
          </h2>
          <ul className="list-disc pl-6 text-gray-700 font-roboto text-lg leading-relaxed space-y-4 mb-10">
            <li>
              <strong>Concept & Detailed Design:</strong> We translate visions
              into reality by developing master plans, site layouts, and
              architectural concepts. Our team dives into grading, drainage,
              utility infrastructure, structural systems, and MEP (mechanical,
              electrical, plumbing) design.
            </li>
            <li>
              <strong>Multidisciplinary Engineering:</strong> Our civil,
              structural, water resources, and environmental engineers work
              collaboratively to provide integrated solutions — from roads and
              utilities to sustainable building systems.
            </li>
            <li>
              <strong>Sustainable & Resilient Infrastructure:</strong> We design
              for long-term performance: minimizing lifecycle costs, reducing
              environmental impacts, and building resilience against climate
              risks.
            </li>
            <li>
              <strong>Digital Innovation & Modeling:</strong> We leverage BIM,
              3D modeling, and data-driven workflows to validate design early,
              reduce rework, and streamline construction.
            </li>
            <li>
              <strong>Constructability & Value Engineering:</strong> Our
              engineers focus on buildability and cost optimization without
              compromising on quality — we evaluate construction phasing,
              material choices, and system integration to maximize value.
            </li>
            <li>
              <strong>Construction Support:</strong> We don’t just hand off
              drawings. We provide construction-phase services: review, QA/QC,
              shop drawing coordination, and as-built documentation to keep the
              project on track.
            </li>
          </ul>

          {/* Why SSN Corporation */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Why SSN Corporation
          </h2>
          <ul className="list-disc pl-6 text-gray-700 font-roboto text-lg leading-relaxed space-y-4 mb-10">
            <li>
              <strong>Integrated Teams:</strong> We blend architecture,
              engineering, and planning to deliver refined, cohesive solutions.
            </li>
            <li>
              <strong>Technical Depth plus Local Insight:</strong> We combine
              national-level engineering capabilities with deep knowledge of
              local codes, permitting, and community contexts.
            </li>
            <li>
              <strong>Sustainable Mindset:</strong> Driven by principles of
              resilience and efficiency, we design systems that reduce
              environmental harm and adapt for the future.
            </li>
          </ul>
        </div>

        {/* Decorative Glow Circles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-orange-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default DesignAndEngineering;
