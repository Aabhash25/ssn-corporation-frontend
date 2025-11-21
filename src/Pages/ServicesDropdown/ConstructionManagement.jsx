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

const ConstructionManagement = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Construction Management
          </h1>

          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation offers professional Construction Management services
            to ensure projects are delivered on time, within budget, and to the
            highest quality standards. We coordinate all aspects of
            construction, bridging the gap between planning and execution.
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
              <strong>Project Planning & Scheduling:</strong> Develop detailed
              schedules and coordinate resources for efficient project
              execution.
            </p>
            <p>
              <strong>Cost Management & Budget Control:</strong> Track expenses,
              manage budgets, and optimize resource allocation.
            </p>
            <p>
              <strong>Contract Administration:</strong> Manage contracts, change
              orders, and ensure compliance with agreements.
            </p>
            <p>
              <strong>Quality Assurance & Control:</strong> Monitor construction
              quality and ensure adherence to design specifications.
            </p>
            <p>
              <strong>Risk Management & Mitigation:</strong> Identify potential
              risks and implement strategies to minimize impacts.
            </p>
            <p>
              <strong>Stakeholder Coordination:</strong> Facilitate
              communication between clients, designers, contractors, and
              regulatory agencies.
            </p>
            <p>
              <strong>Reporting & Documentation:</strong> Provide regular
              progress reports, dashboards, and documentation for informed
              decision-making.
            </p>
          </div>

          {/* Why Choose SSN Corporation */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Why Choose SSN Corporation
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-4 mb-16 w-full">
            <p>
              <strong>Experienced Project Managers:</strong> Skilled
              professionals oversee every aspect of construction.
            </p>
            <p>
              <strong>Efficient Coordination:</strong> Seamless collaboration
              with all project stakeholders.
            </p>
            <p>
              <strong>Budget & Schedule Adherence:</strong> Projects delivered
              on time and within budget.
            </p>
            <p>
              <strong>Proactive Risk Management:</strong> Early identification
              and mitigation of construction risks.
            </p>
            <p>
              <strong>Quality-Focused Approach:</strong> Ensuring construction
              meets design and regulatory standards.
            </p>
          </div>
        </div>

        {/* Glow Circles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-green-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default ConstructionManagement;
