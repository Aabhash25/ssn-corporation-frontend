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

const ConstructionAdministration = () => {
  return (
    <>
      <FontsStyle />

      <section className="relative w-full flex flex-col items-center pt-42 pb-12 bg-white overflow-hidden px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <div className="relative z-10 w-full max-w-5xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-snug text-gray-900 mb-4">
            Construction Administration
          </h1>

          <p className="text-lg sm:text-xl font-roboto text-gray-700 max-w-3xl mx-auto">
            At SSN Engineers, our Construction Administration team provides
            end-to-end support to keep projects on track and built as intended.
            We guide clients through every stage of delivery—developing cost
            opinions, preparing bid packages, coordinating with contractors, and
            overseeing construction activities.
          </p>

          <p className="text-lg sm:text-xl font-roboto text-gray-700 max-w-3xl mx-auto mt-6">
            Our field engineers and inspection staff ensure that what is built
            matches the approved design documents and complies with all
            applicable requirements. With close collaboration across all
            engineering disciplines, we provide detailed reviews of construction
            drawings and engineering plans—identifying issues early and
            maintaining quality throughout the project lifecycle.
          </p>
        </div>

        {/* Services List */}
        <div className="w-full max-w-3xl mt-12">
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 text-center mb-6">
            Services We Provide
          </h2>

          <div className="text-lg font-roboto text-gray-800 space-y-2 text-center sm:text-left">
            <p>Construction Engineering Inspection (CEI)</p>
            <p>Construction Materials Sampling and Testing</p>
            <p>Contract Administration</p>
            <p>Bid Assistance</p>
            <p>Project Close Out</p>
            <p>Working Drawing Reviews</p>
            <p>Cost Estimates</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConstructionAdministration;
