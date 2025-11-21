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

const PreConstruction = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Pre-Construction Services
          </h1>

          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation provides comprehensive Pre-Construction services to
            ensure your project is planned efficiently, risks are mitigated
            early, and resources are optimized. We work closely with clients and
            design teams to develop a clear roadmap before breaking ground.
          </p>
        </div>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Our Services */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Our Services
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-4 mb-12 w-full">
            <p>
              <strong>Project Feasibility Studies:</strong> Analyze project
              viability, cost, schedule, and risks to support informed
              decision-making.
            </p>
            <p>
              <strong>Design Review & Constructability Analysis:</strong>{" "}
              Evaluate drawings and designs to ensure practical implementation
              in the field.
            </p>
            <p>
              <strong>Cost Estimation & Budgeting:</strong> Prepare detailed
              cost estimates to optimize resources and minimize surprises during
              construction.
            </p>
            <p>
              <strong>Scheduling & Resource Planning:</strong> Develop realistic
              construction schedules and resource allocation plans.
            </p>
            <p>
              <strong>Risk Assessment & Mitigation:</strong> Identify potential
              project risks and propose strategies to reduce schedule, cost, and
              quality impacts.
            </p>
            <p>
              <strong>Contractor & Vendor Coordination:</strong> Prequalify and
              manage contractors and vendors to ensure alignment with project
              goals.
            </p>
            <p>
              <strong>Pre-Construction Reporting:</strong> Deliver comprehensive
              reports, recommendations, and action plans to guide the project.
            </p>
          </div>

          {/* Why Choose SSN */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Why Choose SSN Corporation
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-4 mb-16 w-full">
            <p>
              <strong>Proactive Planning:</strong> Identify potential challenges
              before construction begins.
            </p>
            <p>
              <strong>Cost & Time Efficiency:</strong> Optimize budgets and
              schedules through meticulous planning.
            </p>
            <p>
              <strong>Collaborative Approach:</strong> Work closely with
              clients, designers, and contractors for smooth execution.
            </p>
            <p>
              <strong>Expert Risk Management:</strong> Minimize uncertainties
              with strategic mitigation plans.
            </p>
            <p>
              <strong>Detailed Documentation:</strong> Clear and actionable
              reports guide construction teams effectively.
            </p>
          </div>
        </div>

        {/* Glow Circles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default PreConstruction;
