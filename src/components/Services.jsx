"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    image: "/7.png",
    title: "Commercial Building Construction",
    description:
      "Complete commercial construction solutions from planning to completion",
  },
  {
    image: "/BedRoomAddition3.jpg",
    title: "Residential Construction",
    description:
      "Custom residential projects with attention to detail and quality",
  },
  {
    image: "/14.jpg",
    title: "Construction Management",
    description:
      "Professional project oversight ensuring timely and budget-conscious delivery",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&auto=format&fit=crop&q=60",
    title: "Pre Construction Services",
    description: "Comprehensive planning, design, and feasibility studies",
  },
  {
    image: "/utilityconstruction.jpg",
    title: "Utility Construction",
    description:
      "Infrastructure development including roads, utilities, and site preparation",
  },
  {
    image: "/MomoStation3.jpg",
    title: "Site Development Construction",
    description: "Ground-up site development and preparation services",
  },
  {
    image: "1.jpg",
    title: "Commercial Space Upfit",
    description: "Renovation and modernization of existing commercial spaces",
  },
];

const Services = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update slidesPerView based on window size
  const updateSlidesPerView = () => {
    if (window.innerWidth < 640) setSlidesPerView(1);
    else if (window.innerWidth < 1024) setSlidesPerView(2);
    else setSlidesPerView(3);
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Calculate the highest index that allows all visible cards to remain in view.
  const maxIndex = Math.max(0, services.length - slidesPerView);

  // Move slides right
  const nextSlide = () => {
    // Ensure we don't go beyond the calculated max index
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Move slides left
  const prevSlide = () => {
    // Ensure we don't go below index 0.
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-6 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
          What We{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            Do
          </span>
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-semibold text-gray-800 mb-6">
          Planning, Designing, Engineering, and Construction{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            Services
          </span>
        </h3>
        <p className="text-base sm:text-lg lg:text-xl font-roboto text-gray-600 max-w-3xl mx-auto">
          We deliver end-to-end planning, design, and construction solutions
          powered by proven expertise, decades of experience, and cutting-edge
          engineering excellence.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-[95%] mx-auto overflow-hidden rounded-3xl">
        {/* Track element */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3"
              style={{
                width: `${100 / slidesPerView}%`,
              }}
            >
              <div className="group relative bg-white rounded-2xl h-full shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="w-full h-72 relative overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-6 text-center border-t border-gray-200">
                    <p className="text-gray-900 text-sm sm:text-base font-roboto mb-3">
                      {service.description}
                    </p>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-playfair font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          disabled={currentIndex === 0}
          className={`absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 ${
            currentIndex === 0
              ? "opacity-40 cursor-not-allowed"
              : "hover:scale-110"
          } bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-700 hover:text-orange-600 z-10`}
        >
          <FaChevronLeft className="text-lg" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          disabled={currentIndex >= maxIndex}
          className={`absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 ${
            currentIndex >= maxIndex
              ? "opacity-40 cursor-not-allowed"
              : "hover:scale-110"
          } bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-700 hover:text-orange-600 z-10`}
        >
          <FaChevronRight className="text-lg" />
        </button>
      </div>

      {/* Fonts */}
      <style jsx>{`
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </section>
  );
};

export default Services;
