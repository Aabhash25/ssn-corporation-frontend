"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    image: "/7.webp",
    title: "Commercial Building Construction",
    description:
      "Complete commercial construction solutions from planning to completion",
  },
  {
    image: "/BedRoomAddition3.webp",
    title: "Residential Construction",
    description:
      "Custom residential projects with attention to detail and quality",
  },
  {
    image: "/14.webp",
    title: "Construction Management",
    description:
      "Professional project oversight ensuring timely and budget-conscious delivery",
  },
  {
    image: "/PreConstruction.webp",
    title: "Pre Construction Services",
    description: "Comprehensive planning, design, and feasibility studies",
  },
  {
    image: "/PreConstructionService.webp",
    title: "Site Development Construction",
    description: "Ground-up site development and preparation services",
  },
  {
    image: "CommercialUpfit.jpg",
    title: "Commercial Space Upfit",
    description: "Renovation and modernization of existing commercial spaces",
  },
];

const Services = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  // Adjust slides per view based on screen width
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

  // Create extended array with clones for seamless loop
  const extendedServices = [
    ...services.slice(-slidesPerView),
    ...services,
    ...services.slice(0, slidesPerView),
  ];

  // Infinite loop next/prev
  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex === services.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else if (currentIndex === -1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(services.length - 1);
      }, 700);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [isTransitioning]);

  // Autoplay infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1500);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const offset = -(currentIndex + slidesPerView) * (100 / slidesPerView);

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-6 overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
          What We Do
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-semibold text-gray-800 mb-6">
          Planning, Design, Engineering, and Construction Services
        </h3>
        <p className="text-base sm:text-lg lg:text-xl font-roboto text-gray-600 max-w-3xl mx-auto">
          We deliver end-to-end planning, design, and construction solutions
          powered by proven expertise, decades of experience, and cutting-edge
          engineering excellence.
        </p>
      </div>

      <div className="relative w-[95%] mx-auto overflow-hidden rounded-3xl">
        <div
          className="flex"
          style={{
            transform: `translateX(${offset}%)`,
            transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {extendedServices.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / slidesPerView}%` }}
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

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-700 hover:text-orange-600 z-10 hover:scale-110"
        >
          <FaChevronLeft className="text-lg" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-700 hover:text-orange-600 z-10 hover:scale-110"
        >
          <FaChevronRight className="text-lg" />
        </button>
      </div>

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
