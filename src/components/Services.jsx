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
    image: "/CommercialUpfit.webp",
    title: "Commercial Space Upfit",
    description: "Renovation and modernization of existing commercial spaces",
  },
];

const services2 = [
  {
    image: "/19.webp",
    title: "Land Planning and Development",
    description:
      "Strategic land use planning and development services for optimal site utilization",
  },
  {
    image: "/MorisvilleCommercial2.webp",
    title: "Residential, Commercial, and Institutional Building Design",
    description: "Residential, Commercial, and Institutional Building Design",
  },
  {
    image: "/FacilityPlanningDesign.webp",
    title: "Facility Planning and Design",
    description:
      "Efficient facility planning and design tailored to your operational needs",
  },
  {
    image: "/SpecialtyStructurePlanningAndDesign.webp",
    title: "Specialty Engineering Services",
    description:
      "Diverse specialty engineering solutions for complex project requirements",
  },
  {
    image: "/SubsurfaceInvestigation.webp",
    title: "Subsurface Investigation and Geotechnical Engineering",
    description:
      "In-depth subsurface analysis and geotechnical engineering for safe and stable foundations",
  },
];

const Slider = ({ services, reverse = false }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);
  const autoplayRef = useRef(null);

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

  const extendedServices = [
    ...services.slice(-slidesPerView),
    ...services,
    ...services.slice(0, slidesPerView),
  ];

  const getActualIndex = () => {
    if (currentIndex < 0) return services.length + currentIndex;
    if (currentIndex >= services.length) return currentIndex - services.length;
    return currentIndex;
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoplay();
  };

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => {
      const next = reverse ? prev - 1 : prev + 1;
      // Wrap around: if we exceed bounds, loop to the start/end
      if (next >= services.length) return 0;
      if (next < 0) return services.length - 1;
      return next;
    });
    resetAutoplay();
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => {
      const prev_index = reverse ? prev + 1 : prev - 1;
      // Wrap around: if we exceed bounds, loop to the end/start
      if (prev_index >= services.length) return 0;
      if (prev_index < 0) return services.length - 1;
      return prev_index;
    });
    resetAutoplay();
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = reverse ? prev - 1 : prev + 1;
        // Wrap around on autoplay
        if (next >= services.length) return 0;
        if (next < 0) return services.length - 1;
        return next;
      });
    }, 3000);
  };

  useEffect(() => {
    // No need for wrap-around logic here since we handle it in nextSlide/prevSlide
    // This effect is now a no-op but kept for structure
  }, [currentIndex, services.length]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [isTransitioning]);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = reverse ? prev - 1 : prev + 1;
        // Wrap around on autoplay
        if (next >= services.length) return 0;
        if (next < 0) return services.length - 1;
        return next;
      });
    }, 3000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [reverse, services.length]);

  const offset = -(currentIndex + slidesPerView) * (100 / slidesPerView);

  return (
    <div className="mb-0">
      <div className="relative w-[95%] mx-auto overflow-hidden rounded-3xl mb-8">
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
              className="flex-shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / slidesPerView}%` }}
            >
              <div className="group relative bg-white rounded-2xl h-full shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="w-full h-64 sm:h-72 relative overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 sm:p-6 text-center border-t border-gray-200">
                    <p className="text-gray-900 text-sm sm:text-base font-roboto leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-700 hover:text-yellow-500 hover:bg-white z-10 hover:scale-110"
        >
          <FaChevronLeft className="text-base sm:text-lg" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-700 hover:text-yellow-500 hover:bg-white z-10 hover:scale-110"
        >
          <FaChevronRight className="text-base sm:text-lg" />
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 sm:gap-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              getActualIndex() === index
                ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-yellow-500"
                : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 pt-6 md:pt-8 pb-8 md:pb-12 overflow-hidden">
      <div className="text-center mb-12 md:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
          What We Do
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-semibold text-gray-800 mb-6">
          Planning, Design, Engineering, and Construction Services
        </h3>
        <p className="text-base sm:text-lg lg:text-xl font-roboto text-gray-600 max-w-3xl mx-auto">
          We deliver end-to-end planning, design engineering, and construction
          solutions powered by proven expertise, decades of experience, and
          cutting-edge engineering excellence. We also provide a wide range of
          engineering services.
        </p>
      </div>

      {/* First Slider - Original Direction */}
      <Slider services={services} reverse={false} />

      {/* Second Slider - Reverse Direction */}
      <div className="mt-16 md:mt-20">
        <Slider services={services2} reverse={true} />
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
