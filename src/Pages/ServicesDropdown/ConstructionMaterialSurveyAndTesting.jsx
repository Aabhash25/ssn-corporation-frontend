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

const ConstructionMaterialSurvey = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Construction Material Survey and Testing
          </h1>

          {/* Animated Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation delivers comprehensive Construction Material Survey
            and Testing services that give owners, engineers, and contractors a
            clear understanding of material condition, suitability, and
            performance. Through systematic on-site surveys, precise sampling,
            and accredited laboratory analyses, we assess the quality,
            compliance, and long-term durability of construction materials. Our
            mission is to provide reliable data, reduce uncertainties, and
            ensure that every material incorporated into your project meets the
            standards required for safe, efficient, and dependable construction.
          </p>
        </div>

        {/* What We Do */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg font-roboto text-gray-700 leading-relaxed mb-6">
            SSN Corporation offers complete material survey and testing
            solutions that support both new construction and existing site
            assessments. Our team conducts pre-construction material surveys,
            documenting existing site conditions, identifying usable and
            unsuitable materials, and evaluating soil characteristics essential
            for foundation design and earthwork planning. During active
            construction, we perform field sampling and material verification
            for soils, aggregates, concrete, asphalt, and masonry to confirm
            compliance with project specifications. In our accredited
            laboratories, materials undergo testing for strength, durability,
            gradation, compaction, density, moisture content, and overall
            composition, ensuring each component meets structural and
            performance requirements. For redevelopment or renovation projects,
            we provide condition surveys, core extractions, and material
            verification to assess degradation, determine remaining service
            life, and evaluate the suitability of existing materials for reuse.
            This integrated survey-and-testing approach supports informed
            decision-making, minimizes risk, and maintains compliance with IBC,
            ASTM, AASHTO, and applicable local standards.
          </p>

          {/* Why Choose SSN Corporation */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Why Choose SSN Corporation
          </h2>
          <ul className="list-disc pl-6 text-gray-700 font-roboto text-lg leading-relaxed space-y-4 mb-10">
            <li>
              Comprehensive Material Survey Expertise – Clear and accurate
              documentation of existing site materials and conditions.
            </li>
            <li>
              Certified, Accredited Testing – Laboratory and field testing
              performed to nationally recognized standards.
            </li>
            <li>
              Fast, Actionable Reporting – Detailed results delivered quickly to
              keep your project moving.
            </li>
            <li>
              Responsive Field Technicians – Timely on-site sampling and
              inspections aligned with construction schedules.
            </li>
            <li>
              Regulatory & Specification Compliance – Testing aligned with
              project requirements and governing codes.
            </li>
            <li>
              Reduced Risk & Lower Costs – Early identification of unsuitable
              materials prevents delays, rework, and future failures.
            </li>
          </ul>

          {/* Additional Highlights */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Additional Highlights
          </h2>
          <ul className="list-disc pl-6 text-gray-700 font-roboto text-lg leading-relaxed space-y-4 mb-10">
            <li>
              Supports pre-construction planning through material validation and
              site condition assessments.
            </li>
            <li>
              Ideal for renovations and redevelopment, offering detailed
              evaluations of existing structures and materials.
            </li>
            <li>
              Fully integrated with engineering, inspection, and construction
              management teams for seamless project support.
            </li>
            <li>
              Experience across multiple sectors: commercial, industrial,
              infrastructure, municipal, transportation, energy, and
              residential.
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

export default ConstructionMaterialSurvey;
