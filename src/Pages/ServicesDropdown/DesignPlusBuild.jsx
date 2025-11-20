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

const DesignPlusBuild = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Design plus Build
          </h1>

          {/* Animated Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation — Integrated Design-Build Solutions
          </p>
        </div>

        {/* Sections */}
        <div className="relative z-10 w-full max-w-7xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
              We believe that when all minds work as one
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Buildings rise smarter, faster, and with greater precision. Our
              integrated design-build methodology transforms the traditional
              construction journey into a unified, streamlined experience—one
              driven by clarity, collaboration, and your vision.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
              One Team. One Process. One Point of Accountability.
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Rather than navigating a maze of subcontractors and consultants,
              we provide a single dedicated partner from concept to completion.
              In-house architects, engineers, planners, and construction
              specialists all operate within one coordinated team. This
              eliminates communication gaps, reduces delays, and ensures that
              every detail stays aligned with the goals you set from day one.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
              Where Vision Takes Shape
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Before introducing design concepts, our integrated team of
              architects, engineers, planners, and construction specialists
              engages with you in a focused collaborative session to refine
              objectives, explore possibilities, and define the foundation for a
              successful project. This session serves as the launching point for
              creativity, feasibility, and strategic alignment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
              Technology That Eliminates Guesswork
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              To strengthen our design-build approach, we integrate advanced
              Building Information Modeling (BIM) into each project. BIM allows
              every discipline to visualize the structure in a shared digital
              environment, resolving conflicts long before construction begins.
              With issues addressed early, schedules become more reliable and
              budgets more predictable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
              Design and Construction That Move Together
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Because our design and construction phases overlap, we accelerate
              timelines without sacrificing quality. This approach also gives us
              the flexibility to adjust and innovate as new insights
              emerge—something far more difficult in traditional, linear
              construction models.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
              Why to Choose SSN’s Design-Build Method
            </h2>
            <ul className="list-disc pl-6 text-gray-700 font-roboto text-lg leading-relaxed space-y-2">
              <li>
                Reduced risk through single-source responsibility from initial
                concept to final punch-list
              </li>
              <li>
                Clearer communication with one accountable entity managing the
                entire process
              </li>
              <li>
                Shorter overall schedules thanks to concurrent design and
                construction workflows
              </li>
              <li>
                Adaptive design flexibility when field conditions or new ideas
                call for adjustments
              </li>
              <li>
                Stronger collaboration and innovation as designers and builders
                work side-by-side, not in silos
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
              More Than Design-Build — Design plus Build, Powered by You
            </h2>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed">
              Instead of generally practicing “design-build,” our approach
              transforms the process: your vision, your budget, your success
              criteria. We never lose sight of the fact that the project exists
              because of you—and for you. Every decision, every model, every
              detail is shaped by a commitment to exceed expectations at every
              stage.
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

export default DesignPlusBuild;
