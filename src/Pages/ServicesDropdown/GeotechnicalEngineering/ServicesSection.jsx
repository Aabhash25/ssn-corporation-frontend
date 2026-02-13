"use client";

import { useState } from "react";

const ServicesSection = ({ servicesDataRow1, servicesDataRow2 }) => {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCardExpansion = (serviceId) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const renderServiceCard = (service) => {
    const isExpanded = expandedCards.has(service.id);
    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 min-h-[350px] md:min-h-[450px]">
        {/* Image Section */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className={`w-full h-full ${
              service.image === "/geotechServices10.jpg"
                ? "object-[center_65%]"
                : "object-center"
            } ${
              service.image === "/geotechService.png" ||
              service.image === "geotechServices9.png"
                ? "object-fill"
                : "object-cover"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg md:text-xl font-bold text-white font-playfair leading-tight drop-shadow-lg">
              {service.title}
            </h3>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Details */}
          <div className="space-y-3 mb-4">
            {(isExpanded ? service.details : service.details.slice(0, 4)).map(
              (detail, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#242687] mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {detail}
                  </span>
                </div>
              ),
            )}
          </div>

          {/* Toggle Button */}
          {service.details.length > 4 && (
            <button
              onClick={() => toggleCardExpansion(service.id)}
              className="text-[#242687] hover:text-blue-600 text-sm font-medium transition-colors duration-200"
            >
              {isExpanded
                ? "See Less ↑"
                : `See ${service.details.length - 4} More ↓`}
            </button>
          )}
        </div>
      </div>
    );
  };

  const allServices = [...servicesDataRow1, ...servicesDataRow2];

  return (
    <section className="relative w-full py-6 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        <div className="text-center mb-12">
          <div>
            <span className="block mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
              Our Geotechnical Services
            </span>
          </div>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {allServices.map((service) => renderServiceCard(service))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
