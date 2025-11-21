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

const GeneralConstruction = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            General Construction
          </h1>

          {/* Animated Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation builds projects through a collaborative and
            transparent approach. Whether it’s new construction, renovations, or
            complex multi-phase work, our team delivers reliable execution,
            clear pricing, and quality craftsmanship. From the first discussion
            to the final handoff, we focus on a solid plan and a confident,
            smooth delivery.
          </p>
        </div>

        {/* The SSN Difference */}
        <div className="relative z-10 w-full max-w-7xl mx-auto mb-10">
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            The SSN Difference
          </h2>
          <p className="text-lg font-roboto text-gray-700 leading-relaxed">
            The real value begins before construction. We start by understanding
            your goals, challenges, and priorities. This foundation allows us to
            create a clear, efficient, and predictable building process from the
            start.
          </p>
        </div>

        {/* What We Do */}
        <div className="relative z-10 w-full max-w-7xl mx-auto mb-10">
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            What We Do
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-4">
            <p>
              <strong>General Contracting:</strong> We manage day-to-day
              construction operations, coordinate subcontractors, oversee safety
              and quality, maintain schedules, and provide consistent reporting.
              Our experience spans commercial, educational, nonprofit,
              hospitality, retail, and industrial sectors.
            </p>
            <p>
              <strong>Construction Management:</strong> Acting as your
              representative, SSN oversees architects, engineers, and trade
              partners to ensure the project stays aligned with your goals,
              scope, schedule, and budget. We provide leadership and
              communication so you maintain visibility without handling daily
              coordination.
            </p>
            <p>
              <strong>Pre-Construction Services:</strong> We establish project
              clarity early through budgeting, value engineering,
              constructability reviews, and schedule development. Our planning
              reduces surprises and ensures the project starts with well-defined
              expectations.
            </p>
            <p>
              <strong>Guaranteed Maximum Price (GMP):</strong> Through
              competitive local bidding and open-book review, we establish a GMP
              to provide financial certainty. If costs exceed the agreed amount
              due to uncontrollable conditions, SSN absorbs the overage—not the
              owner.
            </p>
            <p>
              <strong>Construction Management at Risk (CMAR):</strong> For
              owners needing strong cost control and early collaboration, we
              partner with the design team from the outset. As CMAR, we accept
              responsibility for delivering the project within the agreed budget
              and timeline.
            </p>
            <p>
              <strong>Renovations & Facility Upgrades:</strong> We evaluate
              existing buildings to determine the best path—whether cosmetic
              enhancements, functional improvements, or larger-scale expansions.
              Our team focuses on maximizing use of the current facility while
              minimizing disruption.
            </p>
          </div>
        </div>

        {/* Why SSN Corporation */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Why SSN Corporation
          </h2>

          <div className="text-gray-700 font-roboto text-lg leading-relaxed space-y-4">
            <p>
              <strong>Disciplined Process:</strong> A structured approach that
              keeps every phase organized and on track.
            </p>
            <p>
              <strong>Transparent Communication:</strong> Clear updates, open
              dialogue, and no surprises.
            </p>
            <p>
              <strong>Investment Protection:</strong> Decisions made to
              safeguard your budget, schedule, and long-term value.
            </p>
            <p>
              <strong>Long-Term Partnership Mindset:</strong> We build with the
              care and accountability of a trusted partner.
            </p>
            <p>
              <strong>Safety & Quality First:</strong> Strong safety practices
              and dependable craftsmanship on every job.
            </p>
            <p>
              <strong>Reliable Scheduling:</strong> Consistent planning that
              keeps your project moving efficiently.
            </p>
            <p>
              <strong>Integrated Team Approach:</strong> Strong trade
              partnerships and collaborative coordination.
            </p>
            <p>
              <strong>Dedicated On-Site Leadership:</strong> Hands-on management
              ensuring attention to detail and responsible execution.
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

export default GeneralConstruction;
