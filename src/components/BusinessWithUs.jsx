"use client";
import React from "react";
import { Link } from "react-router-dom";

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

const BusinessWithUs = () => {
  return (
    <>
      <FontsStyle />
      <section className="relative flex flex-col items-center pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10 bg-white overflow-hidden">
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20 flex justify-center">
          <div className="max-w-5xl text-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 leading-snug">
              Build Your Future with Confidence— Trust Us
            </h2>

            {/* Animated Divider */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse"></div>
            </div>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg md:text-xl font-roboto text-gray-700 leading-relaxed mb-4 sm:mb-6">
              At SSN Corporation , we turn visions into reality. Our team offers
              full-service support from planning and design to execution and
              completion. Every project is built with a focus on quality
              innovation and sustainability.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-roboto text-gray-600 leading-relaxed mb-6 sm:mb-8">
              In Residential, commercial, or industrial sectors, we deliver
              results beyond expectations Share your project concept with us and
              let’s create something remarkable together.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
              <Link to="/contact">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 sm:py-4 px-10 sm:px-12 rounded-3xl shadow-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Optional decorative circles */}
        <div className="absolute top-16 sm:top-20 left-8 sm:left-10 w-36 sm:w-48 h-36 sm:h-48 bg-orange-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-8 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </section>
    </>
  );
};

export default BusinessWithUs;
