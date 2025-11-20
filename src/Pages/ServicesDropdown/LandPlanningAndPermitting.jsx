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

const LandPlanningAndPermitting = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Land Planning and Permitting
          </h1>

          {/* Animated Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            At SSN Corporation, we help turn your site vision into an approved,
            buildable project. Our Land Planning & Permitting team combines
            smart planning, engineering, and regulatory expertise to move
            projects through approvals quickly, cost-effectively, and with fewer
            surprises.
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
              <strong>Project Kickoff & Due Diligence:</strong> We review
              zoning, site constraints, utilities, and environmental factors
              early to identify risks and opportunities before design begins.
            </li>
            <li>
              <strong>Master Planning & Site Design:</strong> We create
              practical lot layouts, circulation plans, grading, and stormwater
              concepts that meet project goals while satisfying regulatory and
              community expectations.
            </li>
            <li>
              <strong>Entitlements & Permitting Strategy:</strong> We map out
              all required local, state, and federal approvals—zoning, site
              plans, environmental permits, driveway/ROW access, NPDES, and
              more—to reduce delays and unexpected reviews.
            </li>
            <li>
              <strong>Regulatory Coordination & Agency Support:</strong> We
              prepare application packages, technical documents, and
              environmental reports, and represent your project in meetings,
              hearings, and agency reviews to keep approvals moving.
            </li>
            <li>
              <strong>Construction-Ready Documents & Compliance:</strong> We
              deliver complete permit drawings and provide conditions tracking,
              monitoring plans, and post-approval support to keep construction
              compliant and on schedule.
            </li>
          </ul>

          {/* Why SSN Corporation */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Why SSN Corporation
          </h2>
          <ul className="list-disc pl-6 text-gray-700 font-roboto text-lg leading-relaxed space-y-4 mb-10">
            <li>
              <strong>Integrated Team:</strong> Our planners, engineers, and
              permitting specialists work together to anticipate requirements
              and avoid rework.
            </li>
            <li>
              <strong>Local Expertise plus Strong Technical Skills:</strong> We
              understand local boards and standards and back every submittal
              with solid technical analysis.
            </li>
            <li>
              <strong>Proactive, Schedule-Focused Process:</strong> Early due
              diligence and clear permitting roadmaps keep timelines predictable
              and budgets on track.
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

export default LandPlanningAndPermitting;
