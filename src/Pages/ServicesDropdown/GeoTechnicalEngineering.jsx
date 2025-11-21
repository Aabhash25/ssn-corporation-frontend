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

const GeotechnicalEngineering = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Geotechnical Engineering
          </h1>

          {/* Animated Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation provides comprehensive geotechnical engineering
            services that form the foundation for safe, efficient, and reliable
            construction. From preliminary site investigations to advanced soil
            and rock analysis, we help clients understand subsurface conditions,
            mitigate risks, and optimize designs for structures, pavements, and
            infrastructure. Our goal is to deliver actionable insights that
            support confident decision-making at every stage of a project.
          </p>
        </div>

        {/* What We Do */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            What We Do
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-6 mb-10 w-full">
            <p>
              <strong>Site Investigations & Subsurface Exploration:</strong>{" "}
              Conducting boreholes, test pits, cone penetration tests (CPT),
              dynamic cone penetration (DCP) tests, and standard penetration
              tests (SPT) to accurately characterize soil, rock, and groundwater
              conditions.
            </p>
            <p>
              <strong>Laboratory Testing & Material Analysis:</strong>{" "}
              Evaluating soil, rock, and aggregate properties, including
              strength, compressibility, permeability, and chemical composition.
            </p>
            <p>
              <strong>Foundation Design & Recommendations:</strong> Designing
              shallow and deep foundations, including piles, caissons, mat
              foundations, and retaining structures, tailored to soil conditions
              and project requirements.
            </p>
            <p>
              <strong>Slope Stability & Earth Retention:</strong> Assessing
              natural and engineered slopes, retaining walls, soldier piles,
              tiebacks, and temporary shoring for stability and safety.
            </p>
            <p>
              <strong>Ground Improvement & Soil Stabilization:</strong>{" "}
              Techniques such as compaction, grouting, geosynthetics, and soil
              replacement to enhance bearing capacity and reduce settlement.
            </p>
            <p>
              <strong>Pavement & Earthwork Support:</strong> Subgrade
              evaluation, pavement design recommendations, and construction
              quality control to ensure durable roadway and site performance.
            </p>
            <p>
              <strong>Seismic & Lateral Earth Pressure Analysis:</strong>{" "}
              Evaluating seismic risks, lateral soil pressures, and structural
              interaction for resilient design.
            </p>
            <p>
              <strong>Geotechnical Reports & Risk Assessment:</strong> Preparing
              detailed reports with recommendations, construction
              considerations, and mitigation strategies to minimize risk and
              ensure regulatory compliance.
            </p>
          </div>

          {/* Why Choose SSN Corporation */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Why Choose SSN Corporation
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-6 mb-10 w-full">
            <p>
              <strong>Comprehensive Expertise:</strong> Experienced engineers
              provide practical, code-compliant solutions.
            </p>
            <p>
              <strong>Accurate & Reliable Testing:</strong> Advanced laboratory
              and field testing for confident decision-making.
            </p>
            <p>
              <strong>Integrated Approach:</strong> Coordination with
              structural, civil, and construction teams ensures cohesive project
              execution.
            </p>
            <p>
              <strong>Risk Reduction:</strong> Early identification of
              subsurface challenges prevents costly delays and failures.
            </p>
            <p>
              <strong>Client-Focused Communication:</strong> Clear reports,
              timely updates, and collaborative problem-solving.
            </p>
          </div>
        </div>

        {/* Decorative Glow Circles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-orange-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default GeotechnicalEngineering;
