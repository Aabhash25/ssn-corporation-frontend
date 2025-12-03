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
  // Projects
  const featureProjects = [
    {
      id: 1,
      image: "./SlaughterHouse1.webp",
      title: "Slaughter House - Retail Convenience Store ",
    },
    {
      id: 2,
      image: "./GamesDayMensHealth5.webp",
      title: "GamesDay Men's Health - Design and Engineering ",
    },
    {
      id: 3,
      image: "./NorthWoodsShoppingCenter1.webp",
      title: "NorthWood Shopping Center - Architectural Design",
    },
  ];

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

          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            Our Design and Engineering practice delivers creative, efficient,
            and technically sound solutions — ensuring projects are visually
            compelling, structurally optimized, and practically buildable. We
            support buildings, infrastructure, roadways, facilities,
            educational, and industrial projects across vertical and horizontal
            construction sectors.
          </p>
        </div>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* What We Do */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-6">
            What We Do
          </h2>

          <div className="space-y-6 text-gray-700 font-roboto text-lg leading-relaxed mb-12">
            <p>
              <strong>Concept & Detailed Design:</strong> We translate visions
              into reality by developing master plans, site layouts,
              architectural concepts, grading, drainage, utilities, structural
              systems, and MEP design.
            </p>

            <p>
              <strong>Multidisciplinary Engineering:</strong> Our civil,
              structural, water resources, and environmental engineers work
              collaboratively to ensure all systems function together as one.
            </p>

            <p>
              <strong>Sustainable & Resilient Infrastructure:</strong> We design
              for long-term performance—minimizing costs, reducing environmental
              impact, and ensuring climate resilience.
            </p>

            <p>
              <strong>Digital Innovation & Modeling:</strong> We use BIM, 3D
              modeling, and technology-driven workflows to reduce rework and
              validate design early.
            </p>

            <p>
              <strong>Constructability & Value Engineering:</strong> We optimize
              material selection, construction phasing, and system integration
              for maximum value.
            </p>

            <p>
              <strong>Construction Support:</strong> Our team provides QA/QC,
              shop drawing reviews, coordination, and as-built documentation to
              ensure successful execution.
            </p>
          </div>

          {/* Why SSN Corporation */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-6">
            Why SSN Corporation
          </h2>

          <div className="space-y-6 text-gray-700 font-roboto text-lg leading-relaxed mb-16">
            <p>
              <strong>Integrated Teams:</strong> We combine architecture,
              engineering, and planning to deliver cohesive and refined design
              solutions.
            </p>

            <p>
              <strong>Technical Depth + Local Insight:</strong> National-level
              engineering expertise blended with deep understanding of local
              codes, permitting processes, and community needs.
            </p>

            <p>
              <strong>Sustainable Mindset:</strong> We prioritize efficiency,
              resilience, and environmental responsibility in every design.
            </p>
          </div>

          {/* ⭐ FEATURE PROJECTS ⭐ */}
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-8">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {featureProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Glow Circles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-orange-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default DesignAndEngineering;
