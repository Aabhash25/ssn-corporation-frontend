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

const SpecialtyEngineeringServices = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-5 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-7xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Specialty Engineering
          </h1>

          {/* Animated Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            SSN Corporation provides a full range of specialty engineering and
            technical services that support the planning, design, and execution
            of complex projects. Our team combines engineering precision,
            advanced modeling tools, and field-tested expertise to help clients
            achieve safe, efficient, and cost-effective outcomes. Each service
            is delivered with a focus on quality, compliance, and long-term
            performance—ensuring your project moves forward with clarity and
            confidence. Currently, we offer the following services:
          </p>
        </div>

        {/* Services Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto space-y-12">
          {/* Pavement Design */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Pavement Design
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              SSN Corporation delivers robust pavement design solutions tailored
              to traffic demands, soil conditions, and long-term performance
              requirements. Our engineers evaluate subgrade conditions, material
              options, and load expectations to create pavement structures that
              maximize durability and reduce maintenance costs. From roadways
              and parking lots to heavy-duty industrial pavements, we design
              systems that stand up to real-world use.
            </p>
          </div>

          {/* Trenchless Design Services */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Trenchless Design Services
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              SSN Corporation provides efficient and minimally invasive
              trenchless design services for underground utilities. Our team
              handles bore path planning, geotechnical coordination, and
              structural assessments to ensure safe, accurate, and
              code-compliant installations. We specialize in Horizontal
              Directional Drilling (HDD), Microtunneling, and Pipe Jacking,
              selecting the best method to reduce surface disruption, avoid
              conflicts with existing infrastructure, and deliver projects on
              time and on budget.
            </p>
          </div>

          {/* Traffic Engineering Services */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Traffic Engineering Services
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              SSN Corporation provides traffic engineering solutions that
              improve mobility, safety, and roadway performance. Our services
              include trip generation analyses, traffic impact studies, signal
              design, signage and marking plans, and traffic control plans for
              construction. We help clients navigate regulatory processes,
              optimize traffic flow, and create safer environments for
              motorists, pedestrians, and cyclists.
            </p>
          </div>

          {/* MEP Services */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              MEP Services
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              Our MEP (Mechanical, Electrical, and Plumbing) services deliver
              coordinated, energy-efficient, and cost-effective building system
              designs. SSN Corporation integrates system performance, code
              compliance, and constructability to produce MEP solutions that
              support occupant comfort, operational efficiency, and long-term
              reliability. From concept design to final commissioning, we ensure
              every system works seamlessly together.
            </p>
          </div>

          {/* Special Inspections & Field Support */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Special Inspections & Field Support
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              SSN Corporation provides certified special inspections and field
              support to ensure construction work complies with project
              specifications and building codes. Our team performs inspections
              for structural components, fireproofing, concrete, masonry, steel,
              and anchorage systems. With real-time field coordination and clear
              reporting, we help identify issues early and keep construction on
              track.
            </p>
          </div>

          {/* 3D Modeling & Rendering */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              3D Modeling & Rendering
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              Our 3D modeling and rendering services help clients visualize
              designs with clarity and accuracy. SSN Corporation produces
              detailed, photorealistic visuals that support planning,
              presentations, and decision-making. These models allow teams to
              understand spatial relationships, identify conflicts, and
              communicate design intent effectively before construction begins.
            </p>
          </div>

          {/* BIM Modeling */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              BIM Modeling
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              SSN Corporation provides advanced Building Information Modeling
              (BIM) services to improve coordination, reduce clashes, and
              streamline construction workflows. Our BIM models integrate
              architectural, structural, and MEP systems into a single digital
              environment, enabling better communication across project teams
              and supporting efficient construction sequencing and facility
              management.
            </p>
          </div>

          {/* Specialty Structural Design */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Specialty Structural Design
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              Our specialty structural design services address complex
              challenges with advanced analysis and creative engineering. SSN
              Corporation designs retaining walls, soldier piles, lagging,
              tiebacks, shoring, bracing, temporary works, crane foundations,
              rigging plans, lifting analysis, pre-engineered connections, and
              delegated design components. Each solution is engineered to meet
              critical safety, performance, and construction requirements while
              supporting overall project objectives efficiently and reliably.
            </p>
          </div>

          {/* Instrumentation Engineering */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-3">
              Instrumentation Engineering
            </h2>
            <p className="text-gray-700 font-roboto text-lg leading-relaxed">
              SSN Corporation delivers precise instrumentation engineering for
              structural and geotechnical monitoring. We design and implement
              systems that measure vibration, displacement, load, pressure, and
              environmental conditions. These monitoring solutions help clients
              track performance, verify design assumptions, and ensure safety
              during construction and long-term operation.
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

export default SpecialtyEngineeringServices;
